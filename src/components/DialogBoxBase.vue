<template>
  <!--Back drop-->
  <Transition
    enter-active-class="transition ease-out duration-[0.5s]"
    leave-active-class="transition ease-out duration-[0.8s]"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="showDialog"
      class="fixed inset-0 z-[50] bg-slate-900 bg-opacity-30 backdrop-blur-[3px]"
    ></div>
  </Transition>

  <!--Dialog-->
  <Transition
    enter-active-class="transition ease-in-out duration-[0.3s]"
    leave-active-class="transition ease-in-out duration-[0.3s]"
    :enter-from-class="fromClasses[animateMode]"
    :enter-to-class="toClasses[animateMode]"
    :leave-from-class="toClasses[animateMode]"
    :leave-to-class="fromClasses[animateMode]"
  >
    <div
      v-show="showDialog"
      class="fixed inset-0 z-[100] flex items-center justify-center"
    >
      <div
        class="p-15 relative flex max-h-full min-h-[50px] flex-col rounded-2xl bg-slate-50 p-3"
        :style="{ width: dialogWidth + 'em' }"
      >
        <div
          class="flex items-center justify-between border-b-[1px] border-slate-400 pb-2"
        >
          <span class="px-2 font-bold text-gray-500">{{ header }}</span>
          <i
            class="bi bi-x-circle px-2 text-xl text-gray-500 hover:cursor-pointer hover:text-rose-500"
            @click="$emit('closeDialog')"
          ></i>
        </div>
        <div class="p-2">
          <slot></slot>
        </div>
        <div class="h-full py-2">
          <slot name="controlBox"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { DialogLoadAnimation } from "@/enums";

interface Props {
  header?: string;
  showDialog: boolean;
  dialogWidth?: number;
  loadAnimation?: DialogLoadAnimation;
}

const animateMode = computed(() => {
  return DialogLoadAnimation[_props.loadAnimation ?? DialogLoadAnimation.Zoom]?.toString().toLowerCase();
});

const _props = withDefaults(defineProps<Props>(), {
  dialogWidth: 25,
  header: "Header",
  showDialog: true,
});

const fromClasses = ref<any>({
  zoom: "opacity-0 scale-0",
  rotate: "opacity-0 scale-0 rotate-180",
  frombottom: "opacity-0 translate-y-[5rem]",
  fromright: "opacity-0 translate-x-[-5rem]",
  fromtop: "opacity-0 translate-y-[-5rem]",
  fromleft: "opacity-0 translate-x-[5rem]",
});

const toClasses = ref<any>({
  zoom: "opacity-100 scale-1",
  rotate: "opacity-100 scale-1",
  frombottom: "opacity-100 translate-y-0",
  fromright: "opacity-100 translate-x-0",
  fromtop: "opacity-100 translate-y-0",
  fromleft: "opacity-100 translate-x-0",
});

defineEmits(["closeDialog"]);

</script>

<style scoped></style>
