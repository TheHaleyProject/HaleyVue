<template>
  <DialogBox v-bind="$props" @closeDialog="$emit('closeDialog')">
    <template #default>
      <div class="flex h-full min-h-[50px] flex-col">
        <slot></slot>
        <slot name="controlBox">
          <div
            :class="
              cn('m-2 mt-8 flex h-9 justify-end space-x-3', controlBoxClass)
            "
            class=""
          >
            <button
              :class="
                cn('min-w-24 content-center bg-gray-200  p-0', cancelBtnClass)
              "
              @click.stop="$emit('closeDialog')"
            >
              Cancel
            </button>
            <button
              :class="
                cn('min-w-24 bg-sky-700 p-0 text-slate-200', acceptBtnClass)
              "
              @click.stop="$emit('accepted')"
            >
              Yes
            </button>
          </div>
        </slot>
      </div>
    </template>
  </DialogBox>
</template>

<script setup lang="ts">
import DialogBox from "./DialogBox.vue";
import { DialogLoadAnimation, SvgIconType } from "@enums";
import { cn } from "@functions";
import { ref, computed } from "vue";

interface Props {
  header?: string;
  showDialog: boolean;
  loadAnimation?: DialogLoadAnimation;
  headerClass?: string;
  backdropClass?: string;
  dialogClass?: string;
  bodyClass?: string;
  controlBoxClass?: string;
  cancelBtnClass?: string;
  acceptBtnClass?: string;
}

defineProps<Props>();

defineEmits(["closeDialog", "accepted"]);
</script>

<style scoped></style>
