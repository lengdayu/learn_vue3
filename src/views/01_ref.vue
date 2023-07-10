<template>
  <div class="about">
    <h1>{{ people }}</h1>
    <div><button @click="change">+1</button></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const people = ref({ name: "JJ", age: 40 });
const change = () => {
  console.log(people);
  console.log(people.value);
  people.value.name = "JAY";
};
</script>
