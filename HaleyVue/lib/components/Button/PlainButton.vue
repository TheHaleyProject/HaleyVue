<template>
  <button class="h-fancy-btn bg-red-200 w-14 h-12" v-if="kind == ButtonKind.fancyBorder"></button>
  Button
</template>

<script setup lang="ts">
import {ButtonKind} from '@enums';
interface Props{
   kind?:ButtonKind
}
const _props = withDefaults(defineProps<Props>(),{
      kind:ButtonKind.simple,
});
</script>

<style scoped>
button{
  cursor: pointer;
}

.h-fancy-btn{
  --b: 3px; /* border thickness */
  --s: 0.15em; /* size of the corner */
  --c: #bd5532;
  padding: calc(0.05em + var(--s)) calc(0.3em + var(--s));
  color: var(--c);
  --_p: var(--s);

  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      var(--c) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
}
</style>