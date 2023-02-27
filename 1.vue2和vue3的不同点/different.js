// 1.OptionsAPI与CompositionsAPI
// Vue2代码逻辑分散在不同的options中，可读性差，可维护性差
// vue3逻辑分明，可维护性高

// 2.重写了双向绑定
// vue2采用的object.defineProperty(obj,prop,desc)
// vue3则采用了proxy的方式重写

// 优点：可以监听数组的变化，可以监听数组的索引和length的变化，可以监听对象属性的新增和删除
// 省去for-in循环，丢掉麻烦的备份数据
console.log("上面暂时不明白的2点");

// 3.vue3优化了vdom
// vue2每次更新都是全量diff
// vue3采用了patch flag（补丁标记） 优化静态树，将动态绑定的变量或者属性，单独标记出来，一些固定的class之类的非动态固定属性不再对比

// 4.vue3支持多个根节点
