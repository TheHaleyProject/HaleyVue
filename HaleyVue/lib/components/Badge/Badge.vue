<template>
    <div class="badge">
     This is a badge
    </div>
</template>

<script setup lang="ts">
import { DialogLoadAnimation } from '@lib/enums';

defineProps<{animatemode?:DialogLoadAnimation}>();
</script>

<style scoped>
.badge {
    color: rgb(26, 206, 238);
}
</style>