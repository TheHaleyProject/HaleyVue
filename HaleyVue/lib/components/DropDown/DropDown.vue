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
import { onBeforeMount, onMounted, ref, watch } from "vue";
import { cn } from "@functions";

interface Props {
  source?: any[];
  displayProperty?: string;
  bindingProperty?:string;
  placeHolder?: string;
  mainClass?: string;
  dropdownItemClass?: string;
  dropdownClass?: string;
}

const showPopup = ref<boolean>(false);
const displayItem = ref<any>();
const [selectedItem,modifiers] = defineModel<any>({
  set(value) {
    if (modifiers.bind && value != undefined) {
      // console.log(value);
      return value[_props.bindingProperty] || undefined;
    }
    return value
  }
});

// const selectedValue = defineModel<any>('value');
const selectedIndex = ref<number>();
const _emit = defineEmits<{ (e: "selectionChanged", item: any): void }>();
const _props = withDefaults(defineProps<Props>(), {
  displayProperty: "name",
  bindingProperty: "id",
  placeHolder: "-- select --",
});

watch(
  () => selectedItem.value,
  () => {
    displayItem.value = selectedItem.value;
    // selectedValue.value = selectedItem.value[_props.bindingProperty] || selectedItem.value;
    if (selectedItem.value != null && selectedItem.value != undefined) {
      _emit("selectionChanged", selectedItem.value);
    }
  },
);

watch(()=> selectedIndex.value,()=>{
  selectedItem.value = _props.source[selectedIndex.value]; //this will trigger the other watch.
})

// onBeforeMount(()=>{
// console.log('before mount');
// })


onMounted(()=>{
  let input = selectedItem.value;
  selectedItem.value = undefined; //we are setting it to undefined and then setting it back to ensure that the default start up values are properly managed.
  selectedItem.value = input;
  displayItem.value = selectedItem.value;
});
</script>

<style scoped></style>
