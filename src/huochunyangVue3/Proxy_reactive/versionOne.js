// -----------版本1-------------------响应式数据，痛点：痛过名字（effect）获取副作用函数，这种硬编码方式很不灵活--------------------------------------------------------
const bucket = new Set()    //装载副作用的桶

const data = {text:'hello world'}   //原始数据

const obj = new Proxy(data,{    //对原始数据的代理
    get(target,key){
        console.log("target:",target,"key:",key)
        bucket.add(effect)   //将副作用添加在桶中
        return target[key]
    },
    set(target,key,newVal){
        target[key] = newVal
        bucket.forEach(fn=>fn())      //将副作用从桶中取出
        return true
    }
})
function effect(){
    // console.log(document,"document")
    let a = obj.text
    console.log(a,22)
}
effect()
setTimeout(()=>{
    obj.text = 'hello vue3'
},1000)