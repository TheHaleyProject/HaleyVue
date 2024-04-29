<script setup lang="ts">
//  import {MessageDisplayer }from '@haleyjs/vue';
// import HelloWorld from './components/HelloWorld.vue'
import {MessageDisplayer, DialogBox} from "@haleyjs/vue";
import { ref } from "vue";

const showDialog = ref<boolean>(false);
</script>

<template>
  <div>
    <h2>Hello world</h2>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1 class="text-amber-400">Hello world</h1>
    <a href="https://vitejs.dev" target="_blank" >
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      Hello
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
 <Displayer2 msg="whaat"/>
 <MessageDisplayer msg="what the "/>
 <MessageDisplayer msg="asd2344 23423 " />
 <input type="button" value="Show Modal" class="p-2  bg-red-500 select-none cursor-pointer" @click="showDialog = !showDialog"/>
 <DialogBox :show-dialog header-class="text-green-800 pt-20"/>
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
