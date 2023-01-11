// new Set(?Arr)                                        构造（可以传入数组，会自动去重）
//size 集合大小
// add(value) -Set                                      添加元素（可链式编程）
//has(value) -boolean                                   查询元素是否存在
//delete(value) -boolean                                删除
//clear()                                               清空
//forEach(callbackFn,?thisArg)                          对容器每个元素做操作
//keys（）                                              用法同values() 因为set只有value列表
//values() 
//entries()                                             会返回两倍set

const m = new Set()
console.log('m',m)   //Set(0) {}

//使用数组初始化集合  
const s1 = new Set(['val1','val2','val3',{a:1}])
// console.log('s1',s1,'s1长度:',s1.size)   //Set(3) { 'val1', 'val2', 'val3' } s1长度: 3
// console.log('s1第一位取值',s1.entries(),"keys值：",s1.keys(),"keys的values值：",s1.values())
s1.forEach((item)=>{
    console.log(item)                //val1 val2 val3 {a:1}
})
//values值
values = s1.values()
console.log('首次声明values',values)
for(item of values){
    console.log(item,"values值")            //val1 val2 val3 {a:1}    这里我们发现 迭代器循环后返回的是空的 读取到迭代器n（n<size）部分 values将会返回（size-n）剩下部分的迭代器
}
console.log(values,"再次申明values")
values = s1.values()                //思考：为什么这里需要再次什么values
for(i=0;i<1;i++){
    console.log(values.next().value,"迭代性")        //val1 val2 val3 {a:1}
}
console.log(values,"再次申明values22")
//key值
keys = s1.keys()
for(itemKey of keys){
    console.log(itemKey,"key值")           //val1 val2 val3 {a:1}
}


