<template>
  <div>ref:{{ title1 }}</div>
  <div>shallowRef:{{ title2 }}</div>
  <div>customRef:{{ obj }}</div>
  <div ref="dom">dom :{{ "我是dom" }}</div>
  <div><button @click="changButton">修改</button></div>
</template>
<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef, customRef } from "vue";

const title1 = ref({ name: "jay" });
const title2 = shallowRef({ name: "jay2" });

function myRef<T>(value: T) {
  let timer: any;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, 5000);
      },
    };
  });
}

const obj = myRef<string>("自定义ref改变前1");

const dom = ref<HTMLElement>();

const changButton = () => {
  title2.value.name = "jj2";
  triggerRef(title2);
  console.log(isRef(title1));
  obj.value = "自定义ref改变后2";
  console.log(dom);
  console.log(dom.value?.innerText);
};
</script>
<style scoped></style>
