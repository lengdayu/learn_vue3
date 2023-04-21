<template>
  <div>ref:{{ Man }}</div>
  <div>shallowRef:{{ Man2 }}</div>
  <div>customRef:{{ obj }}</div>
  <h2 ref="myDom">ref绑定dom元素</h2>
  <button @click="change">修改</button>
</template>

<script lang="ts" setup>
import { ref, isRef, shallowRef, triggerRef, customRef } from "vue";
//ref 深层次
//shallowRef 浅层次
type M = {
  name: string;
};
const Man = ref<M>({ name: "周杰伦" });
const Man2 = shallowRef<M>({ name: "周杰伦" });
const change = () => {
  Man.value.name = "林俊杰";
  console.log(isRef(Man)); //true
  Man2.value.name = "林俊杰";
  triggerRef(Man2);
  console.log(Man2); //true
  obj.value = "蔡依林";
  console.log(obj.value);
  console.log(myDom.value?.innerHTML);
};

function myRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
      },
    };
  });
}

let obj = myRef<string>("jolin");

const myDom = ref<HTMLHeadingElement>();
</script>
<style lang="scss" scoped></style>
