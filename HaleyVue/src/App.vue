<script setup lang="ts">
import * as comp from "../lib/components";
import {ref} from 'vue';
const showdialog = ref<boolean>(false);
// import * as comps from "@lib/components";

// // console.log(MessageDisplayer);
// // console.log(Badge);
// // Object.entries(comps).forEach(p=>{console.log(p[0]); console.log (p[1]);});

// // console.log(Object.entries(comps));

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <comp.MessageDisplayer />
  <comp.Badge/>
  <input type="button" name="Search" class="bg-red-500 w-24 rounded-lg p-2 cursor-pointer hover:bg-red-300 active:scale-95 active:bg-sky-300" value="Search" @click="showdialog = !showdialog"/>
  <comp.DialogBoxBase :show-dialog="showdialog" class="w-1/2" :force-close="true">
    <template #default>
    <p> Hello world</p>
      </template>
  </comp.DialogBoxBase>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
