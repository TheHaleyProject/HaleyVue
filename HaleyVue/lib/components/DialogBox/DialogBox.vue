<template>
  <Teleport to="body">
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
        :class="cn('fixed inset-0 z-[99] h-screen w-screen bg-opacity-30 backdrop-blur-sm backdrop-brightness-50 bg-blue-600',backdropClass)"
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
        :class="cn('fixed left-1/2 top-1/2 z-[100] flex max-h-[60vh] max-w-[60vw] -translate-x-1/2 -translate-y-1/2 overflow-clip',dialogholderClass)"
      >
        <div
          :class="cn('relative flex max-h-full min-h-[3.125rem] flex-col rounded-md bg-slate-50 p-2 text-red-900 w-96',dialogClass)"
        >
        <div :class="cn('text-red-600 pt-6 text-2xl text-green-600 text-xl',headerClass)">Below is the message.. </div>
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd
          asdfas asdfa asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd
          asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd Xdadsadsfasdfa
          asdfasd asdfas asdfa asdfasd asdXdadsadsfasdfa asdfasd asdfas asdfa
          asdfasd asd Xdadsadsfasdfa asdfasd asdfas asdfa asdfasd asd
          <!-- <div
          class="flex items-center justify-between border-b-[.0625rem] border-slate-400 pb-2"
        >
          <span class="px-2 font-bold text-white">{{ header }}</span>
          <i
            class="px-2 select-none text-xl text-gray-500 hover:cursor-pointer hover:text-rose-500"
            @click="forceClose ? showDialog = false :$emit('closeDialog')"
          > X </i>
        </div>
        <div class="p-2 ">
          <slot></slot>
        </div>
        <div class="h-full py-2">
          <slot name="controlBox"></slot>
        </div> -->
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { DialogLoadAnimation } from "@enums";
import { cn } from "@functions";
import {ref,computed} from 'vue';

interface Props {
  header?: string;
  showDialog: boolean;
  loadAnimation?: DialogLoadAnimation;
  forceClose?: boolean;
  headerClass?:string;
  backdropClass?:string;
  dialogholderClass?:string;
  dialogClass?:string;
}

const {
  loadAnimation = DialogLoadAnimation.Zoom,
  header = "Header",
  showDialog = true,
} = defineProps<Props>();

const animateMode = computed(() => {
  return DialogLoadAnimation[loadAnimation]?.toString().toLowerCase();
});

// const _props = withDefaults(defineProps<Props>(), {
//   dialogWidth: 25,
//   header: "Header",
//   showDialog: true,
// }); //Use latest destructuring methods.

const fromClasses = ref<any>({
  zoom: "opacity-0 scale-0",
  rotate: "opacity-0 scale-0 rotate-180",
  frombottom: "opacity-0 translate-y-[80px]",
  fromright: "opacity-0 translate-x-[-80px]",
  fromtop: "opacity-0 translate-y-[-80px]",
  fromleft: "opacity-0 translate-x-[80px]",
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