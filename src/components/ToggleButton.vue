<template>
  <div
    class="relative m-1 inline-flex w-fit select-none items-center "
  >
    <!-- Using For attribute for the label leads to making first target with the id to be affected. -->
    <input v-model="value" type="checkbox" class="tswitch" />
    <label class="tswitch mx-2" @click="change"></label>
    {{ title }}
  </div>
</template>

<script setup lang="ts">
const cbox = ref<HTMLElement>();

function change() {
  _emit("update:cValue", !value.value);
}
const _props = withDefaults(
  defineProps<{
    cValue?: any;
    title?: string;
  }>(),
  {
    cValue: false,
  }
);
const _emit = defineEmits(["update:cValue"]);
const value = computed({
  get() {
    return _props.cValue;
  },
  set(value) {
    _emit("update:cValue", value);
  },
});
</script>

<style scoped>
/* hide the checkbox */
input[type="checkbox"].tswitch {
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
}

label.tswitch {
  cursor: pointer;
  width: 40px;
  height: 22px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label.tswitch:after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 20px;
  transition: 0.05s;
}

/* If parent has child concept.. */
/* label.tswitch:has(input[type="checkbox"].tswitch:checked) {
  background: #0f8850d0;
}

label.tswitch:has(input[type="checkbox"].tswitch:checked):after {
  left: calc(100% - 2.5px);
  transform: translateX(-100%);
} */

input[type="checkbox"].tswitch:checked + label.tswitch {
  background: #0f8850d0;
}

input[type="checkbox"].tswitch:checked + label.tswitch:after {
  left: calc(100% - 2.5px);
  transform: translateX(-100%);
}

label.tswitch:active:after {
  width: 22px;
}
</style>
