<script setup lang="ts">
import * as comp from "../lib/components";
import {ref} from 'vue';
const showdialog = ref<boolean>(false);
// import * as comps from "@lib/components";

// // console.log(MessageDisplayer);
// // console.log(Badge);
// // Object.entries(comps).forEach(p=>{console.log(p[0]); console.log (p[1]);});

// // console.log(Object.entries(comps));

function handleShowDialog(){
  // if (showdialog.value){
  //   //remove attribute from body
  //   document.querySelector("body div#app")?.removeAttribute("haley-blur");
  // } else{
  //   //add attribute to the body
  //   document.querySelector("body div#app")?.setAttribute("haley-blur","");
  // }
  showdialog.value = !showdialog.value
}

</script>

<template>
  <div >
    <h1>Hello world.. This is a demo test</h1>
    <h1>Hello world.. This is a demo test</h1>
    <h1>Hello world.. This is a demo test</h1>
    <h1>Hello world.. This is a demo test</h1>
    <h1>Hello world.. This is a demo test</h1>
    <h1>Hello world.. This is a demo test</h1>
    <h1>Hello world.. This is a demo test</h1>
    <h1>Hello world.. This is a demo test</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      Hello there
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
</div>

  <comp.MessageDisplayer />
  <comp.Badge/>
  <input type="button" name="Search" class="bg-red-500 w-24 rounded-lg p-2 cursor-pointer hover:bg-red-300 active:scale-95 active:bg-sky-300" value="Search" @click="handleShowDialog()"/>
  <comp.DialogBox :show-dialog="showdialog" header-class="text-blue-400 pt-12 pl-6 bg-purple-400" >
    <!-- <template #default>
    <p class="text-red-400 text-2xl"> Hello world</p>
      </template> -->
  </comp.DialogBox>
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
