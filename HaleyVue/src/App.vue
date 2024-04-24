<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { MessageDisplayer, Badge } from "@lib/components";

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
  <HelloWorld msg="Hello wowrld"/>
  <MessageDisplayer />
  <Badge/>
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
