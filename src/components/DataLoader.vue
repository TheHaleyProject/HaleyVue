//https://stackoverflow.com/questions/33289726/combination-of-async-function-await-settimeout
//Check above link for using Async/Await with timeout

<template>
  <div v-if="!data.is_loaded" class="m-4 flex flex-col items-center p-5">
    <ProgressLoader
      :kind="animationMode"
      :height="70"
      :width="70"
      :size="2"
    />
    <span class="text-slate-600">{{ data.loading_msg }}</span>
  </div>

  <div v-else>
    <div v-if="!data.is_sucess">
      {{ data.error_msg }}
    </div>
    <div v-else>
      <slot></slot>
    </div>
    <!-- grid-cols-[repeat(auto-fill,minmax(300px,1fr))] -->
  </div>
</template>

<script setup lang="ts">
import { LoadingAnimation } from "@/enums";

interface Props {
  data: IApiFetchStatus;
  animationMode?: LoadingAnimation;
}

//Cannot direclty assign Idataloader to the Props. We need to assign it as a function
// const _props = withDefaults(defineProps<Props>(), {
//   data:  ()=><IApiFetchStatus>{
//     loading_msg: "Fetching data from server.. Please wait..",
//     error_msg: "Unable to fetch data.. Try later or contact admin..",
//   },
// });
const _props = withDefaults(defineProps<Props>(), {
  animationMode: LoadingAnimation.DoubleRectangleSpinner,
});
</script>

<style scoped></style>
