<template>
    <div>
        <h1>ref</h1>
        <h5> noRef:{{ man }} </h5>
        <h5> ref:{{ manRef }} </h5>
        <div>
            <button @click="changeRef">修改ref</button>
        </div>
        <h5> shallowRef:{{ manShallowRef }} </h5>
        <div>
            <button @click="changeShallowRef">修改shallowRef</button>
        </div>
    </div>
    <hr>
    <div>
        <h5>reactive</h5>
        <form>
            <input v-model="form.name" type="text">
            <br>
            <input v-model="form.age" type="text">
            <br>
            <button @click.prevent="submit">提交</button>
        </form>
    </div>
    <div>
        <h1>toref</h1>
        <div>
            toref:{{send}}
        </div>
        <button @click="changeToRefMan">修改</button>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, shallowRef, toRef } from 'vue';

//被ref包裹的对象具有响应式
const man ={ name: 'jj' }
const manRef = ref({name:'jay'}) //返回的是es6的class类
const manShallowRef = shallowRef({name:'vae'}) 

//ref  深层次的响应式
//shallowRef 浅层次的响应式
//如果两者同时使用shallowRef会被ref调用视图更新

const changeRef=()=>{
    man.name='JJ'
    manRef.value.name ='JAY'
}

const changeShallowRef=()=>{
    manShallowRef.value.name ='VAE'
    console.log(manShallowRef)
}

//reactive 只接受引用类型 ref支持所有类型
//reactive 取值赋值不需要.value获取。 ref则需要
//reactive 是proxy解构，不能直接赋值，会破坏响应式
//解决方案 数组 使用push 加解构
//shallowReactive 同上ref

let form=reactive({
    name:'zs',
    age:18
})

const submit=()=>{
    console.log(form)
}

//
const toRefMan = reactive({
    name:'JJ',
    send:"愿与愁"
})
const send = toRef(toRefMan,'send')
const changeToRefMan = ()=>{
    send.value ='重拾快乐'
    console.log(send)
}
</script>

<style lang="less" scoped></style>