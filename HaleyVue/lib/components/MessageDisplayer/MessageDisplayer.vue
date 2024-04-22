<template>
    <div>
     <h2>From External : {{ msg }}</h2>
    </div>
</template>

<script setup lang="ts">
defineProps<{msg?:string}>();
</script>


<style scoped>

</style>