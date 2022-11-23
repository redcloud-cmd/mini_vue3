// -----------版本1-------------------响应式数据，痛点：痛过名字（effect）获取副作用函数，这种硬编码方式很不灵活--------------------------------------------------------
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

// -----------------版本2-----------------------------------------------------------------------------------------------------------------------------------------

//升级1：解决只能通过函数名称   痛点：使用Set数据结构作为存储副作用函数的‘桶’，没有在副作用函数与被操控的目标字段之间建立明确的联系，当读取属性，无论读取的是哪个属性，其实都一样，都会把副作用函数收集到‘桶’
// const bucket = new Set()    //装载副作用的桶
// let activeEffect 
// const data = {text:'hello world'}   //原始数据

// const obj = new Proxy(data,{ 
//     //对原始数据的代理
//     get(target,key){
//         console.log(key,"key")
//         if(activeEffect){
//             bucket.add(activeEffect) 
//         }  
//           //将副作用添加在桶中
//         return target[key]
//     },
//     set(target,key,newVal){
//         console.log(key,"setkey")
//         target[key] = newVal
//         bucket.forEach(fn=>fn())      //将副作用从桶中取出
//         return true
//     }
// })

// function effect(fn){
//     activeEffect = fn
//     fn()
//     // let a = obj.text
//     // console.log(a,22)
// }
// effect(()=>{ 
//     a= obj.text
//     console.log(a)
// })
// setTimeout(()=>{
//     obj.text = 'hello vue3'
//     obj.noExist = "no 属性"             //noExist会触发obj设置操作，导致同个对象不同属性读取出发effectFn 
// },1000)


// -----------------版本3 newMap-----------------------------------------------------------------------------------------------------------------------------


//存储副作用函数的桶
const bucket = new WeakMap()
//修改get/set拦截器代码
let activeEffect 
const data = {text:'hello world'}  
const obj = new Proxy(data,{
    //拦截读取操作
    get(target,key){
        //没有activeEffect 直接return
        console.log(target,"target")
        if(!activeEffect) return target[key]
        //根据target 从“桶”中取得depsMap,它是个Map类型： key --> effects
        let depsMap = bucket.get(target)
        //如果不存在depMap，那么新建一个Map并与target关联
        if(!depsMap){
            bucket.set(target,(depsMap = new Map()))
        }
        //再根据key 从depsMap中取得deps，他是一个Set类型，
        //里面存储着所有与当前key相关联的副作用函数：effects
        let deps = depsMap.get(key)
        //如果deps不存在，同样新建一个Set并与key关联
        if(!deps){
            depsMap.set(key,(deps = new Set()))
        }
        deps.add(activeEffect)
        //返回属性值
        return target[key]
    },
    //拦截设置操作
    set(target,key,newVal){
        //设置属性值
        target[key] = newVal
        //根据target从桶中取得depsMap，它是key-->effects
        const depsMap = bucket.get(target)
        if(!depsMap) return 
        //根据key取得所有副作用函数effects
        const effects = depsMap.get(key)
        console.log(effects,"effectsssss")
        //执行副作用函数
        effects &&effects.forEach(fn => fn())
    }
})
// effect(()=>{ 
//         a= obj.text
//         console.log(a)
//     })

function test(){
   
    obj.text="你好"
    console.log(obj,"obj")
}
test()
    // setTimeout(()=>{
    //     obj.text = 'hello vue3'
    //     obj.noExist = "no 属性"             //noExist会触发obj设置操作，导致同个对象不同属性读取出发effectFn 
    // },1000)