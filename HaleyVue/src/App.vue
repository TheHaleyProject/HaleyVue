<script setup lang="ts">
import * as comp from "../lib/components";
import {ref} from 'vue';
import { DialogBox,PlainButton } from "../lib/components";
import {ButtonKind} from "@enums";
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
    <h4>Hello world.. This is a demo test</h4>
    <h4>Hello world.. This is a demo test</h4>
    <h4>Hello world.. This is a demo test</h4>
    <h4>Hello world.. This is a demo test</h4>
    <h4>Hello world.. This is a demo test</h4>
    <h4>Hello world.. This is a demo test</h4>
    <h4>Hello world.. This is a demo test</h4>
    <h4>Hello world.. This is a demo test</h4>
    <PlainButton/>
</div>

  <comp.Badge/>
  <input type="button" name="Search" class="bg-red-500 w-24 rounded-lg p-2 cursor-pointer hover:bg-red-300 active:scale-95 active:bg-sky-300" value="Search" @click="handleShowDialog()"/>

  <PlainButton @click="()=> {console.log('hello');}" :kind="ButtonKind.fancyBorder"/>
  <!-- <DialogBox :show-dialog="showdialog" header-class="px-4 bg-transparent text-gray-600" dialog-class="rounded-2xl" body-class="w-96" @close-dialog="showdialog = !showdialog" backdrop-class="bg-blue-400 bg-opacity-30" >
    <template #default>
    <p class=""> sdf adsfasd asdfasdf asdfasdsdfasdfas daasdfasdfas da sdfasdf adsfasd asdfasdf asdfasdfasd asdfasdfa sdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas daasdfasdfas da sdfasdf adsfasd asdfasdf asdfasdfasd asdfasdfa sdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas daasdfasdfas da sdfasdf adsfasd asdfasdf asdfasdfasd asdfasdfa sdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas da sdfasdf adsfasd asdfasdf asdfasdsdfasdfas daadsfasd asdfasdf asdfasd </p>
      </template>
  </DialogBox> -->
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
