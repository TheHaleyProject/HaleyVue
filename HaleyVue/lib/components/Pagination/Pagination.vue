<template>
  <div
    class="flex-row items-center justify-between"
    :class="totalItems > 0 ? 'flex' : 'hidden'"
    v-if="(totalPages > 1 && autoHide) || !autoHide"
  >
    <nav class="order-1 flex items-center gap-3">
      <i
        class="bi bi-skip-start-fill text-3xl text-sky-500 hover:text-orange-600"
        :class="
          currentPage <= 1
            ? 'pointer-events-none cursor-not-allowed text-slate-400'
            : 'cursor-pointer text-sky-500'
        "
        @click="goToEnd(false)"
        title="Go to First"
      ></i>
      <span
        class="select-none hover:text-orange-600"
        :class="
          currentPage <= 1
            ? 'pointer-events-none cursor-not-allowed text-slate-400'
            : 'cursor-pointer text-sky-500'
        "
        @click="changePage(false)"
        >Previous</span
      >

      <span
        class="select-none hover:text-orange-600"
        :class="
          (currentPage >= totalPages && !unCertain) || !nextPageExists
            ? 'pointer-events-none cursor-not-allowed text-slate-400'
            : 'cursor-pointer text-sky-500'
        "
        @click="changePage(true)"
        >Next</span
      >

      <i
        class="bi bi-skip-end-fill cursor-pointer text-3xl text-sky-500 hover:text-orange-600"
        :class="
          currentPage >= totalPages
            ? 'pointer-events-none cursor-not-allowed text-slate-400'
            : 'cursor-pointer text-sky-500'
        "
        @click="goToEnd(true)"
        title="Go to End"
      ></i>
      <span class="text-sm text-slate-500">Go to :</span>
      <input
        v-model="gotoPage"
        type="text"
        class="page-input no-outline w-14 bg-white text-slate-500 focus:border-gray-400 "
        @keypress="helpers.NumbersOnly"
        @keypress.enter.exact="handleKeyEvent"
      />
      <select
        v-if="!hideItemsSize"
        @change="displaySizeChanged"
        class="h-8 w-14 rounded-md border-[1px] border-gray-200 bg-white px-1 outline-none"
        v-model="displaySize"
      >
        <option v-if="userPageSizeValid">
          {{ itemsPerPage }}
        </option>
        <option v-for="(ps, index) in pageSizeOptions" :key="index" :value="ps">
          {{ ps }}
        </option>
      </select>
    </nav>

    <div class="flex items-center gap-4 text-left text-sm text-slate-500">
      <div>
        Page
        <span class="font-medium text-slate-600"> {{ currentPage }} </span>
        <span v-show="!unCertain">
          of
          <span class="font-medium text-slate-600">{{ totalPages }}</span></span
        >
      </div>
      <div v-show="!unCertain">
        Total Items :
        <span class="font-medium text-slate-600">{{ totalItems }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import * as helpers from "@functions";

interface Props {
  totalItems: number;
  itemsPerPage?: number;
  activePage?: number;
  hideItemsSize?: boolean;
  autoHide?: boolean;
  currentPageCount?: number;
  unCertain?: boolean;
}

const _props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 12,
  totalItems: 1,
  activePage: 1,
  hideItemsSize: false,
  autoHide: true,
  unCertain: false,
});

const emit = defineEmits<{
  (e: "changePage", page: number, itemsCount: number): void;
}>();

const pageSizeOptions = [10, 20, 50, 75, 100];
const displaySize = ref<number>(
  _props.itemsPerPage && helpers.isNumeric(_props.itemsPerPage)
    ? _props.itemsPerPage
    : pageSizeOptions[0]
);

const currentPage = ref<number>(1);
const gotoPage = ref<string>("");

const userPageSizeValid = computed(() =>
  _props.itemsPerPage != null &&
  helpers.isNumeric(_props.itemsPerPage) &&
  !pageSizeOptions.includes(_props.itemsPerPage) &&
  _props.itemsPerPage > 3
);

const totalPages = computed(() =>
  Math.ceil(
    (_props.totalItems <= 0 ? 1 : _props.totalItems) /
    (displaySize.value <= 0 ? 1 : displaySize.value)
  )
);

const nextPageExists = computed(() =>
  _props.currentPageCount == null ||
  _props.itemsPerPage === _props.currentPageCount
);

function coerceCurrentPage() {
  emit("changePage", currentPage.value, displaySize.value);
}

function handleActivePage() {
  const requested = Number(_props.activePage);
  if (!helpers.isNumeric(requested)) return;
  if (requested !== currentPage.value) {
    if (requested < 1) {
      currentPage.value = 1;
    } else if (currentPage.value > totalPages.value && !_props.unCertain) {
      currentPage.value = totalPages.value;
    } else
      currentPage.value = Math.ceil(requested);
  }
}

function handleKeyEvent(e: any) {
  // if (!(e?.key === "Enter" || e?.keyCode == 13)) return; //we are direclty handling with vue provider.
  //Change page and then request change
  if (helpers.isNumeric(gotoPage.value)) {
    //If numeric, then parse and change value.
    let requested = parseInt(gotoPage.value);
    if (requested == currentPage.value) return; // Do not try to emit if we are processing same values.

    currentPage.value = requested;
  }
  //After you handle , clean the text.
  // gotoPage.value = "";
}

function displaySizeChanged() {
  coerceCurrentPage();
}

function changePage(forward: boolean) {
  const next = currentPage.value + (forward ? 1 : -1);
  if (next < 1 || (!_props.unCertain && next > totalPages.value)) return;
  currentPage.value = next;
}


function goToEnd(forward: boolean) {
  currentPage.value = forward ? totalPages.value : 1;
}

watch(() => [totalPages.value, currentPage.value], ()=>{
  coerceCurrentPage()
}, { immediate: true });

watch(() => _props.itemsPerPage, (val) => {
  if (helpers.isNumeric(val)) displaySize.value = val;
}, { immediate: true });

watch(() => _props.activePage, handleActivePage, { immediate: true });

</script>


<style scoped>
.page-input {
  @apply inline-flex h-7 select-none items-center justify-center rounded border-0 px-1 text-sm outline-none  transition duration-150 ease-in-out;
  box-shadow: 0px 0px 2px 0px rgb(165, 164, 164);
}

select option {
  background-color: white;
}
</style>
