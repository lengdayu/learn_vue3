<template>
    <div v-for="(item,index) in article" :key="index">{{ index+1 }} - {{ item.content }}</div>
</template>
<script setup lang="ts">
    const article=[
        {content:"插值语法  {{ }} ,支持运算和三元表达式"},
        {content:"v-text"},
        {content:"v-html"},
        {content:"v-if"},
        {content:"v-show"},
        {content:"v-on 多用@代替"},
        {content:"v-bind 多用：代替"},
        {content:"v-model"},
        {content:"v-for 遍历"},
        {content:"v-once 只渲染一次"},
        {content:"插值语法  {{ }} "},
    ]
</script>
<style scoped></style>