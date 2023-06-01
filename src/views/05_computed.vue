<template>
    <div>
        <table width="600px"  border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>品名</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>总价</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in productList" :key="index">
                    <td align="center">{{ item.name }}</td>
                    <td align="center">{{ item.price }}</td>
                    <td align="center">
                        <button @click="item.number>1 ? item.number-- : null">-</button>
                        {{ item.number }}
                        <button @click="item.number++">+</button>
                    </td>
                    <td align="center">{{ item.number * Number(item.price) }}</td>
                    <td align="center"><button @click="productList.splice(index,1)">删除</button></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" align="right">总价：{{ total }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';

interface product {
    name:string,
    price:string,
    number:number
}

const productList = reactive<product[]>([
    {name:"黑丝",price: "30", number:100 },
    {name:"超短裙",price: "50", number:50 },
    {name:"洛丽塔",price: "200", number:15 },
])
const total =computed(()=>{
    return productList.reduce((prev:number,cur:product)=>{
        return prev + cur.number * Number(cur.price) 
    },0)
})
</script>

<style scoped>

</style>