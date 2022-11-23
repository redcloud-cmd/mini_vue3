// -----------------版本3 newMap-----------------------------------------------------------------------------------------------------------------------------


//存储副作用函数的桶
const bucket = new WeakMap()
//修改get/set拦截器代码
let activeEffect 
const data = {text:'hello world'}  
const obj = new Proxy(data,{
    //拦截读取操作
    get(target,key){
        console.log(target,"get_target")
        if(!activeEffect) return target[key]
        let depsMap = bucket.get(target)
        if(!depsMap){
            console.log(bucket,"bucket前")
            bucket.set(target,(depsMap = new Map()))
            console.log(bucket,"bucket后")
        }
        // let deps = depsMap.get(key)
        // if(!deps){
        //     depsMap.set(key,(deps = new Set()))
        // }
        // deps.add(activeEffect)
        return target[key]
    },
    //拦截设置操作
    set(target,key,newVal){
        console.log("target:",target,"key:",key,"newVal:",newVal)
        // target[key] = newVal
        // const depsMap = bucket.get(target)
        // if(!depsMap) return 
        // const effects = depsMap.get(key)
        // console.log(effects,"effectsssss")
        // effects &&effects.forEach(fn => fn())
    }
})
// effect(()=>{ 
//         a= obj.text
//         console.log(a)
//     })

function effect(fn){
    activeEffect = fn
    fn()
}
effect(()=>{
     a = obj.text
    console.log("a的值:",a)
})

    // setTimeout(()=>{
    //     obj.text = 'hello vue3'
    //     obj.noExist = "no 属性"             //noExist会触发obj设置操作，导致同个对象不同属性读取出发effectFn 
    // },1000)