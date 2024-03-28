<template>
  <div class="wiz-step" :uniqueid="uniqueid" :order="order" :can-skip="canSkip" :title="title">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    uniqueid:string;
    order?: number;
    title: string;
    canSkip?: boolean;
  }>(),
  {
    canSkip: false,
  }
);
</script>
