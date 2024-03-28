<template>
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
        class="relative flex h-60 w-56 flex-col justify-center rounded-2xl bg-gray-600 p-1 opacity-80"
      >
        <div class="flex select-none flex-col items-center">
          <ProgressLoader :kind="LoadingAnimation.RotatingBalls" primary-color="palegreen" secondary-color="orange" :height="70" :width="70" :size="25" class="p-5"/>
          <span class="text-white">{{ header }}</span>
          <span v-if="internalCountDown > 0" class="text-white">{{
            internalCountDown
          }}</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { DialogLoadAnimation, LoadingAnimation } from "@/enums";

interface Props {
  header?: string;
  showDialog: boolean;
  countDown?: number;
  loadAnimation?: DialogLoadAnimation;
}

const animateMode = computed(() => {
  return DialogLoadAnimation[_props.loadAnimation ?? DialogLoadAnimation.Zoom]
    ?.toString()
    .toLowerCase();
});

const _props = withDefaults(defineProps<Props>(), {
  header: "Header",
  showDialog: false,
  countDown: 0,
});

const internalCountDown = ref<number>(0);

watch(
  () => _props.showDialog,
  (e) => {
    if (!_props.showDialog || _props.countDown < 1) return;
    internalCountDown.value = Math.round(_props.countDown); //Whenever we display the dialog, restart the counter.
    let counter = setInterval(()=>{
     if (internalCountDown.value < 1 || ! _props.showDialog){
      clearInterval(counter);
      return;
     }
     internalCountDown.value--;

    },1000); //Every 1 second run this.
  }
);

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
</script>

<style scoped></style>
