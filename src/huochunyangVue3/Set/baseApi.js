const m = new Set()
console.log('m',m)   //Set(0) {}

//使用数组初始化集合  
const s1 = new Set(['val1','val2','val3',{a:1}])
// console.log('s1',s1,'s1长度:',s1.size)   //Set(3) { 'val1', 'val2', 'val3' } s1长度: 3
// console.log('s1第一位取值',s1.entries(),"keys值：",s1.keys(),"keys的values值：",s1.values())
s1.forEach((item)=>{
    console.log(item)                //val1 val2 val3 {a:1}
})

values = s1.values()
console.log('首次声明values',values)
// for(item of values){
//     console.log(item,"values值")            //val1 val2 val3 {a:1}
// }
console.log(values,"再次申明values")
values = s1.values()                //思考：为什么这里需要再次什么values
for(i=0;i<1;i++){
    console.log(values.next().value,"迭代性")        //val1 val2 val3 {a:1}
}
console.log(values,"再次申明values22")
keys = s1.keys()
for(itemKey of keys){
    console.log(itemKey,"key值")           //val1 val2 val3 {a:1}
}


