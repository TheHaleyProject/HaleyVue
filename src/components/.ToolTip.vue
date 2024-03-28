<template>
  <span
    v-if="display.isSideNavOpen == false"
    class="fixed z-50 py-2 px-2 text-center"
    :style="{ top: top_margin+ 'px', left:left_margin + 'px' }"
  >
    {{ message }}
  </span>
</template>

<script setup lang="ts">
import stores from "@stores";

interface Props{
    top_margin:number,
    left_margin:number,
    message?:string | null,
}

withDefaults(defineProps<Props>(),{
    top_margin:10.0,
    left_margin:10.0,
    message: 'tool tip message',
});

const display = stores.DISPLAY.useDisplayStore();
</script>

<style scoped></style>
