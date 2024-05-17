<template>
  <DialogBox v-bind="$props" v-model="showDialog" @dialogClosing="$emit('dialogClosing')">
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
              @click.stop="showDialog = false; $emit('dialogClosing');"
            >
              Cancel
            </button>
            <!-- For the accept button, we need to consuming component to validate, if it can close or should show some error message -->
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

interface Props {
  header?: string;
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

const showDialog = defineModel<boolean>();
defineEmits(["dialogClosing", "accepted"]);
</script>

<style scoped></style>
