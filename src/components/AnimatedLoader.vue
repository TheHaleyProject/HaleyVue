<template>
  <div>
    <div
      :style="cssVariables"
      v-if="kind == enums.LoadingAnimation.SimpleSpinner"
      class="simple-spinner"
    ></div>
    <div
      :style="cssVariables"
      v-else-if="kind == enums.LoadingAnimation.DoubleRectangleSpinner"
      class="rotating-rectangle"
    ></div>
    <div
      :style="cssVariables"
      v-else-if="kind == enums.LoadingAnimation.RotatingBalls"
      class="double-ball-spinner"
    ></div>
  </div>
</template>

<script setup lang="ts">
import * as enums from "@/enums";

const _props = withDefaults(
  defineProps<{
    kind?: enums.LoadingAnimation;
    primaryColor?: string;
    secondaryColor?: string;
    height?: number;
    width?: number;
    size?: number;
  }>(),
  {
    kind: enums.LoadingAnimation.SimpleSpinner,
    primaryColor: "#3979a4",
    height: 40,
    width: 40,
    size: 8,
  }
);

const adjustedSize = computed<number>(() => {
  if (_props.size != 8) return _props.size; //because user has changed some value deliberately. So, this is what he needs.

  switch (_props.kind) {
    case enums.LoadingAnimation.DoubleRectangleSpinner:
      return 2;
    case enums.LoadingAnimation.RotatingBalls:
      return 18;
    default:
      return _props.size;
  }
});

const adjustedSecondaryColor = computed<string>(() => {
  if (_props.secondaryColor != null) return _props.secondaryColor;
  switch (_props.kind) {
    case enums.LoadingAnimation.DoubleRectangleSpinner:
      return "#ff7575";
    case enums.LoadingAnimation.RotatingBalls:
      return "#ee8080";
    default:
      return "#e6e6e6";
  }
});

const cssVariables = computed(() => {
  return {
    "--loader-color-primary": _props.primaryColor,
    "--loader-color-secondary": adjustedSecondaryColor.value,
    "--loader-height": _props.height + "px",
    "--loader-width": _props.width + "px",
    "--loader-size": adjustedSize.value + "px",
  };
});
</script>

<style scoped>
.simple-spinner {
  border: var(--loader-size) solid var(--loader-color-secondary);
  border-top: var(--loader-size) solid var(--loader-color-primary);
  width: var(--loader-width);
  height: var(--loader-height);
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

.rotating-rectangle {
  width: var(--loader-width);
  height: var(--loader-height);
  display: inline-block;
  position: relative;
}
.rotating-rectangle::after,
.rotating-rectangle::before {
  content: "";
  width: var(--loader-width);
  height: var(--loader-height);
  border: var(--loader-size) solid var(--loader-color-secondary);
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  animation: spin 2s ease-in-out infinite;
}
.rotating-rectangle::after {
  border-color: var(--loader-color-primary);
  animation-delay: 1s;
}

.double-ball-spinner {
  width: var(--loader-width);
  height: var(--loader-height);
  border-radius: 50%;
  display: block;
  /* margin: 15px auto; */
  position: relative;
  box-sizing: border-box;
  animation: spin 1s linear infinite;
}
.double-ball-spinner::after,
.double-ball-spinner::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: var(--loader-color-primary);
  width: var(--loader-size);
  height: var(--loader-size);
  transform: translate(-50%, 50%);
  border-radius: 50%;
}
.double-ball-spinner::before {
  left: auto;
  right: 0;
  background: var(--loader-color-secondary);
  transform: translate(50%, 100%);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
