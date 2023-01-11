//  vue3 的响应式数据是基于Proxy实现的
// proxy只能代理对象，无法代理非对象值（字符串，布尔值等）
// proxy 构造函数接收两个参数，第一个参数是被代理的对象，第二个参数也是一个对象，这个对象是一组夹子（trap）。其中get函数用来拦截读取操作，set函数用来拦截设置操作

const p = new Proxy(obj,{
    set(target,key,newVal,receiver){
        co
    }
})