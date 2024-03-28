<template>
  <DialogBoxBaseVue v-bind="$props" @closeDialog="$emit('closeDialog')">
    <template #default>
      <div class="flex h-full min-h-[50px] flex-col">
        <slot></slot>
      </div>
    </template>
    <template #controlBox>
      <div class="h-9 flex justify-end space-x-3 ">
        <button class="btn-dsn bg-gray-200 " @click.stop="$emit('closeDialog')"> Cancel </button>
        <button class="btn-dsn bg-sky-700 text-slate-200 " @click.stop="$emit('accepted')">Yes</button>
      </div>
    </template>
  </DialogBoxBaseVue>
</template>

<script setup lang="ts">
import DialogBoxBaseVue from "./DialogBoxBase.vue";
import { DialogLoadAnimation } from "@/enums";

interface Props {
  header?: string;
  showDialog: boolean;
  dialogWidth?: number;
  loadAnimation?: DialogLoadAnimation;
}

defineProps<Props>();

defineEmits(['closeDialog','accepted']);

</script>

<style scoped>


</style>
