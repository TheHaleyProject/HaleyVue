<template>
  <div
    @focusout="showPopup = false"
    :class="showPopup ? 'z-[70]' : ''"
  >
    <div
      v-show="showPopup"
      class="fixed inset-0 z-[2] h-screen w-screen bg-transparent"
      @click="showPopup = !showPopup"
    ></div>
    <div
      :class="
        cn(
          'text-gray relative  flex h-10 w-44 cursor-pointer items-center rounded-md border-[1px] border-blue-200 bg-white p-2 hover:border-red-200 active:bg-red-50',
          mainClass,
        )
      "
      @click="showPopup = !showPopup"
    >
      <slot name="display" :displayItem="displayItem">
        <div class="flex w-full items-center justify-between">
          <p>
            {{ displayItem?.[displayProperty] || displayItem || placeHolder }}
          </p>
          <i class="bi-caret-down-fill text-2xl text-gray-600"></i>
        </div>
      </slot>
      <div
        :class="
          cn(
            'firefox-scrollbar absolute left-0 right-0 top-12 z-[4] h-auto max-h-56 min-h-14 overflow-y-auto rounded-md border-[1px] border-blue-200 bg-white p-2',
            showPopup ? 'visible' : 'hidden',
            dropdownClass,
          )
        "
      >
        <div
          :class="
            cn(
              'flex cursor-pointer flex-col items-start rounded-md px-2 hover:bg-sky-300',
              selectedIndex == index ? 'bg-amber-200' : '',
              dropdownItemClass,
            )
          "
          @click="
            selectedItem = entry;
            selectedIndex = index;
          "
          v-for="(entry, index) in source"
          :key="index"
        >
          <slot :entry="entry" :index="index" :selectedIndex="selectedIndex">
            <p>
              {{ entry[displayProperty] ?? entry }}
            </p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { cn } from "@functions";

interface Props {
  source?: any[];
  displayProperty?: string;
  placeHolder?: string;
  mainClass?: string;
  dropdownItemClass?: string;
  dropdownClass?: string;
}

const showPopup = ref<boolean>(false);
const displayItem = ref<any>();
const selectedItem = defineModel<any>();
// const selectedItem = ref<any>();
const selectedIndex = ref<number>();
const _emit = defineEmits<{ (e: "selectionChanged", item: any): void }>();
const _props = withDefaults(defineProps<Props>(), {
  displayProperty: "name",
  placeHolder: "-- select --",
});

watch(
  () => selectedItem.value,
  () => {
    // console.log('Selected Changed %, %', selectedItem.value,displayItem.value );
    // displayItem.value = selectedItem.value;
    // console.log('Selected Changed %, %', selectedItem.value,displayItem.value );
    if (selectedItem.value != null && selectedItem.value != undefined) {
      _emit("selectionChanged", selectedItem.value);
    }
  },
);

watch(()=> selectedIndex.value,()=>{
  // console.log('Index Changed %, %',selectedItem.value, selectedIndex.value );
  displayItem.value = _props.source[selectedIndex.value];
})

onMounted(()=>{
  // console.log('Mounted %, %', selectedItem.value,displayItem.value );
  selectedItem.value = undefined; // we force a change in the item.
  displayItem.value = selectedItem.value;
  // console.log('Mounted -Changed %, %', selectedItem.value,displayItem.value);
});

// onMounted(()=>{
//   console.log('Mounted %, %', selectedItem.value, displayItem.value );
// })
</script>

<style scoped></style>
