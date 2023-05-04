// sfc解构的组成 template script style 三部分

// npm run dev 执行过程
// 1.找到package.json中的scripts 中的完整指令 vite
// 2.然后找到node_modules中 vite文件夹下的package.json，发现他用了软链接，指向 bin目录
// 3.最后在node_modules的.bin文件下，有完整的二进制文件
