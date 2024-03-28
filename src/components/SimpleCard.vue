<template>
       <div
          class="card relative flex max-h-screen cursor-default flex-col overflow-hidden rounded-3xl bg-white text-slate-500 shadow-md shadow-blue-100 transition-colors hover:bg-sky-600 hover:text-white hover:shadow-lg hover:shadow-sky-500"
        >
          <div class="relative flex">
            <img
              class="card-pic w-full object-cover min-h-[8rem]"
              v-bind:src='icon_url ?? "/cdelogo30.png"'
              :class="icon_url ? '' : 'bg-neutral-200 p-5'"
              alt="Icon"

            />
            <div
              class="image-curtain absolute z-20 h-full w-full bg-gray-700 opacity-40"
            ></div>

            <div
              class="card-edit absolute z-30 flex w-full cursor-pointer gap-2 self-end p-2 text-white"
            >
              <i class="bi bi-pencil-square" @click="$emit('editData',data)"></i>
              <i class="bi bi-trash3" @click="$emit('deleteData',data)"></i>
            </div>
            <div
              class="absolute right-2 bottom-2 z-30 flex h-10 w-10 cursor-pointer items-center justify-center self-end rounded-full border border-white bg-slate-50 p-0 text-slate-500 hover:bg-rose-500 hover:text-white"
              @click="$emit('viewData',data)"
            >
              <i class="bi bi-binoculars-fill text-xl"></i>
            </div>
          </div>

          <div
            class="card-body relative flex h-full flex-col justify-between p-3"
          >
            <span class="mt-2 max-h-20 min-h-[40px] overflow-hidden text-sm">{{
              header
            }}</span>
          </div>
        </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    icon_url?:string,
    data:object,
    header:string
}>();

defineEmits(['editData','viewData','deleteData']);

onMounted(()=>{
console.log(props.data);
})
</script>

<style scoped>
.card-body span {
  text-align: center;
}

.card-edit {
  visibility: hidden;
  background-color: rgba(27, 30, 78, 0.486);
}

.card:hover .card-edit {
  visibility: visible;
}

.card:hover .image-curtain {
  opacity: 0;
}

.card-edit i {
  font-size: medium;
}

.card-edit i:hover {
  color: aqua;
}
</style>