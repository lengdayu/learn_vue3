<template>
  <div class="about">
    <h1>{{ num }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const num = ref(1);
</script>
