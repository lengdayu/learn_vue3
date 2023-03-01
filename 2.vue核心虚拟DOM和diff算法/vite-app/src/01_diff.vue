<template>
  <div id="app">
    <div v-for="(item, index) in arr" :key="index">{{ item }}</div>
  </div>
</template>
<script setup lang="ts">
const arr: string[] = ["A", "b", "c", "d"];
arr.splice(2, 0, "DDD");
</script>

<style scoped></style>
