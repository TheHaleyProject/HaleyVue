<template>
  <div class="relative flex w-full flex-col" :class="!display.isSideNavOpen && 'items-center'">
    <RouterLink :to="route_item?.to ?? '/'">
      <span
        class="my-1 flex w-full flex-row items-center justify-between hover:cursor-default hover:rounded-lg"
        :class="[
          is_selected
            ? 'rounded-lg bg-sky-50 shadow-md hover:bg-sky-100'
            : 'hover:bg-rose-100',
        ]"
      >
        <span class="flex flex-row items-center">
          <i
            class="bi py-1"
            :class="[
              route_item?.meta?.icon,
              is_selected ? 'text-sky-500' : 'text-slate-500',
              display.isSideNavOpen ? 'pr-5  pl-2 text-2xl' : ' px-3 text-3xl',
            ]"
          ></i>
          <h6
            :class="[
              is_selected ? 'text-sky-500' : 'text-slate-500',
              display.isSideNavOpen ? 'visible' : 'hidden',
            ]"
          >
            {{ route_item?.displayName }}
          </h6>
        </span>
      </span>
    </RouterLink>
    <i
      v-if="route_item?.children != null"
      class="bi bi-caret-down-fill text-xl justify-self-center absolute self-end py-2 px-2 hover:cursor-pointer"
      :class="[
        is_expanded ? 'rotate-180 text-sky-500' : 'text-slate-500',
        display.isSideNavOpen ? 'visible' : 'hidden',
      ]"
      @click.stop="$emit('toggleSideMenu', route_item?.name)"
    ></i>
  </div>
</template>

<script setup lang="ts">
import stores from "@stores";

interface Props {
  is_selected: boolean;
  is_expanded?: boolean | null;
  route_item?: IRoute | null;
}

defineProps<Props>();
//runtime based emit. (Emit values will be defined during runtime.)
const emit = defineEmits(["toggleSideMenu"]);
const display = stores.DISPLAY.useDisplayStore();
</script>

<style scoped></style>
