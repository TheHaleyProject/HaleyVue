<template>
  <Teleport to="body">
    <!--Back drop-->
    <Transition
      enter-active-class="transition ease-out duration-[0.2s]"
      leave-active-class="transition ease-out duration-[0.4s]"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="showDialog"
        :class="
          cn(
            'fixed inset-0 z-[99] h-screen w-screen bg-blue-600 bg-opacity-30 backdrop-blur-sm backdrop-brightness-50',
            backdropClass,
          )
        "
      ></div>
    </Transition>

    <!--Dialog-->
    <Transition
      enter-active-class="transition ease-in-out duration-[0.4s]"
      leave-active-class="transition ease-in-out duration-[0.1s]"
      :enter-from-class="fromClasses[animateMode]"
      :enter-to-class="toClasses[animateMode]"
      :leave-from-class="toClasses[animateMode]"
      :leave-to-class="fromClasses[animateMode]"
    >
      <div
        v-show="showDialog"
        class="fixed left-1/2 top-1/2 z-[100] flex max-h-[60vh] max-w-[60vw] -translate-x-1/2 -translate-y-1/2 overflow-clip"
      >
        <div
          :class="
            cn(
              'relative flex max-h-full min-h-20  flex-col rounded-md bg-slate-50 text-gray-600',
              dialogClass,
            )
          "
        >
          <!-- Header -->
          <div
            :class="
              cn(
                'text-md flex items-center justify-between gap-2 rounded-t-md bg-sky-500 px-2 py-1 text-white',
                headerClass,
              )
            "
          >
            <span>{{ header }}</span>
            <slot name="closeIcon">
              <SvgIcon
                :icon-kind="SvgIconType.x"
                class="self-end"
                svg-class="hover:text-red-400 cursor-pointer"
                @click="showDialog = false; $emit('dialogClosing');"
              />
            </slot>
          </div>
          <!-- Body -->
          <div :class="cn('overflow-y-auto p-2 min-w-40', bodyClass)">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { DialogLoadAnimation, SvgIconType } from "@enums";
import { SvgIcon } from "@components";
import { cn } from "@functions";
import { ref, computed } from "vue";

interface Props {
  header?: string;
  loadAnimation?: DialogLoadAnimation;
  headerClass?: string;
  backdropClass?: string;
  dialogClass?: string;
  bodyClass?: string;
}

const showDialog = defineModel<boolean>();
defineEmits(["dialogClosing"]);

const animateMode = computed(() => {
  return DialogLoadAnimation[_props.loadAnimation]?.toString().toLowerCase();
});

const _props = withDefaults(defineProps<Props>(), {
  header: "Header",
}); //Use latest destructuring methods.

// const {
//   loadAnimation = DialogLoadAnimation.Zoom,
//   header = "Header",
//   showDialog = true,
// } = defineProps<Props>();

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


</script>

<style scoped></style>
