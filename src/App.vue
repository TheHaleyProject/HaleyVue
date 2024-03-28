<template>
  <div class="box-border my-3">
    This is Landing APP Component
  </div>
  <HelloWorld msg="Hello"/>
  <AnimatedLoader :kind="LoadingAnimation.RotatingBalls"/>
  
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import AnimatedLoader from './components/AnimatedLoader.vue';
import { LoadingAnimation } from './enums';
</script>

<style scoped>
ul li{
  @apply inline p-2 mx-2 bg-neutral-300 rounded-lg hover:bg-sky-400;
}
</style>
