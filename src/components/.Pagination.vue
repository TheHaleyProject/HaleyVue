<template>
  <div
    class="flex flex-row items-center justify-between"
    v-if="(totalPages > 1 && hideItemsSize) || !hideItemsSize"
  >
    <nav class="order-1 flex items-center gap-3">
      <i
        class="bi bi-skip-start-fill cursor-pointer text-3xl text-sky-500 hover:text-orange-600"
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
          currentPage >= totalPages
            ? 'pointer-events-none cursor-not-allowed text-slate-400'
            : 'cursor-pointer text-sky-500'
        "
        @click="changePage(true)"
        >Next</span
      >

      <i
        class="bi bi-skip-end-fill cursor-pointer text-3xl text-sky-500 hover:text-orange-600"
        @click="goToEnd(true)"
        title="Go to End"
      ></i>
      <span class="text-sm text-slate-500">Jump to :</span>
      <input
        v-model="gotoPage"
        type="text"
        class="page-input no-outline w-14 bg-white text-slate-500 focus:border-gray-400"
        v-on:keyup="handleKeyEvent"
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
        <option v-for="(ps,index) in pageSizeOptions" :key="index" :value="ps"> {{ ps }}</option>
      </select>
    </nav>

    <div class="flex items-center gap-4 text-left text-sm text-slate-500">
      <div>
        Page
        <span class="font-medium text-slate-600"> {{ currentPage }} </span> of
        <span class="font-medium text-slate-600">{{ totalPages }}</span>
      </div>
      <div>
        Items :
        <span class="font-medium text-slate-600">{{ totalItems }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import services from "@services";

interface Props {
  totalItems: number;
  itemsPerPage?: number;
  activePage?: number;
  hideItemsSize?: boolean;
}

const _props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 12,
  totalItems: 1,
  activePage: 1,
  hideItemsSize: false,
});

const pageSizeOptions = [10, 20, 50, 100];
const userPageSizeValid = computed<boolean>(() => {
  return (
    _props.itemsPerPage != null && //User value is not null.
    services.HELPERS.isNumeric(_props.itemsPerPage) && //User value is numeric
    ![10, 20, 50, 100].includes(_props.itemsPerPage) && //user value is not already present.
    _props.itemsPerPage > 4 //Atleast 5 should be displayed per page.
  );
});
const displaySize = ref<number>(userPageSizeValid ? _props.itemsPerPage :pageSizeOptions[0]);
const currentPage = ref<number>(1);
const totalPages = computed<number>(() =>
  Math.ceil(
    (_props.totalItems <= 0 ? 1 : _props.totalItems) /
      (displaySize.value <= 0 ? 1 : displaySize.value)
  )
);
const activePageChangeRequest = computed<number>(() => _props.activePage);
const gotoPage = ref<any>();

const emit = defineEmits<{
  (e: "changePage", page: number, itemsCount: number): void;
}>();

function coerceCurrentPage() {
  //Coerce the values
  if (currentPage.value < 1) {
    currentPage.value = 1;
  } else if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value;
  }

  //Try to emit the event.
  emit("changePage", currentPage.value, displaySize.value);
}

function handleKeyEvent(e: any) {
  if (!(e?.key === "Enter" || e?.keyCode == 13)) return;
  //Change page and then request change
  if (services.HELPERS.isNumeric(gotoPage.value)) {
    //If numeric, then parse and change value.
    let requested = parseInt(gotoPage.value);
    if (requested == currentPage.value) return; // Do not try to emit if we are processing same values.

    currentPage.value = requested;
  }
  //After you handle , clean the text.
  gotoPage.value = "";
}

function displaySizeChanged() {
  coerceCurrentPage();
}

function changePage(go_forward: boolean) {
  if (go_forward) {
    currentPage.value++;
  } else {
    currentPage.value--;
  }
}

function goToEnd(go_right: boolean) {
  if (go_right) {
    currentPage.value = totalPages.value;
  } else {
    currentPage.value = 1;
  }
}

watch(currentPage, () => {
  coerceCurrentPage();
});

watch(totalPages, () => {
  //Totalpages only change when we initialize or the total items count changes.
  coerceCurrentPage();
});

watch(activePageChangeRequest, () => {
  if (services.HELPERS.isNumeric(_props.activePage)) {
    //If numeric, then parse and change value.
    let requested = Math.ceil(_props.activePage);
    if (requested == currentPage.value) return; // Do not try to emit if we are processing same values.

    currentPage.value = requested;
  }
});

onMounted(()=>{
  coerceCurrentPage();
})
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
