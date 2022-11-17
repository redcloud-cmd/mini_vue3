// 响应式数据，痛点：痛过名字（effect）获取副作用函数，这种硬编码方式很不灵活
// const bucket = new Set()    //装载副作用的桶

// const data = {text:'hello world'}   //原始数据

// const obj = new Proxy(data,{    //对原始数据的代理
//     get(target,key){
//         bucket.add(effect)   //将副作用添加在桶中
//         return target[key]
//     },
//     set(target,key,newVal){
//         target[key] = newVal
//         bucket.forEach(fn=>fn())      //将副作用从桶中取出
//         return true
//     }
// })
// function effect(){
//     // console.log(document,"document")
//     let a = obj.text
//     console.log(a,22)
// }
// effect()
// setTimeout(()=>{
//     obj.text = 'hello vue3'
// },1000)

//升级1：解决只能通过函数名称   痛点：使用Set数据结构作为存储副作用函数的‘桶’，没有在副作用函数与被操控的目标字段之间建立明确的联系，当读取属性，无论读取的是哪个属性，其实都一样，都会把副作用函数收集到‘桶’
const bucket = new Set()    //装载副作用的桶
let activeEffect 
const data = {text:'hello world'}   //原始数据

const obj = new Proxy(data,{ 
    //对原始数据的代理
    get(target,key){
        console.log(key,"key")
        if(activeEffect){
            bucket.add(activeEffect) 
        }  
          //将副作用添加在桶中
        return target[key]
    },
    set(target,key,newVal){
        console.log(key,"setkey")
        target[key] = newVal
        bucket.forEach(fn=>fn())      //将副作用从桶中取出
        return true
    }
})

function effect(fn){
    activeEffect = fn
    fn()
    // let a = obj.text
    // console.log(a,22)
}
effect(()=>{ 
    a= obj.text
    console.log(a)
})
setTimeout(()=>{
    obj.text = 'hello vue3'
    obj.noExist = "no 属性"
},1000)