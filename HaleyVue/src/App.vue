<script setup lang="ts">
import * as comp from "../lib/components";
import {ref} from 'vue';
import { DialogBox, ConfirmBox, Pagination, ComboBox } from "../lib/components";
import {ButtonKind, LoaderAnimation} from "@enums";

const hdata = ref<any>('22');

const showdialog = ref<boolean>(false);

function selchanged(arg:any){
  console.log(arg);
}
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
    <PlainButton/>
    <AnimatedLoader :kind="LoaderAnimation.RotatingBalls" class="w-44 h-44 bg-green-300"/>
    <!-- <ComboBox class="bg-red-300" v-model="hdata" :source="[1,2,3,4,5,{id:3}]" place-holder="select a value" @selection-changed="selchanged"><template #display="dprops">sdd - {{dprops?.selectedItem}} </template ><template #default="defProps"> {{ defProps.entry["id"]?? defProps.entry }}</template> </ComboBox> -->
    <ComboBox class="bg-red-300" v-model="hdata" :source="[1,2,3,4,5,{id:3}]" place-holder="select a value" @selection-changed="selchanged"><template #default="defProps"> {{ defProps.entry["id"]?? defProps.entry }}</template> </ComboBox>
    <ComboBox class="bg-purple-300" :source="['a','b','c','d','e']" place-holder="select a value" > </ComboBox>
    The selected item is {{ hdata }}
</div>

  <comp.Badge/>
  <input type="button" name="Search" class="bg-red-500 w-24 rounded-lg p-2 cursor-pointer hover:bg-red-300 active:scale-95 active:bg-sky-300" value="Search" @click="handleShowDialog()"/>

  <input type="button" class="bg-green-500 w-24 ml-3 rounded-lg p-2 cursor-pointer hover:bg-red-300 active:scale-95 active:bg-sky-300" value="Change Combo" @click="hdata = 7"/>


  <!-- <PlainButton @click="()=> {console.log('hello');}" :kind="ButtonKind.fancyBorder"/> -->
  <ConfirmBox v-model="showdialog" header-class=" px-4  text-white" @accepted="showdialog = false;"  backdrop-class="bg-blue-400 bg-opacity-30" acceptBtnClass="bg-amber-600">
    <template #default>
    <p class=""> sdf adsfasd asdfasdf asdfa</p>
      </template>
  </ConfirmBox>

  <!-- <Pagination total-items="0" itemsPerPage="55"/> -->
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
