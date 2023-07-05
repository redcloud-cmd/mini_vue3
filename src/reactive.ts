export function reactive(raw){

    return new Proxy(raw,{
        get(target,key){
            const res = Reflect.get(target,key)
            //依赖收集
            return res
        },
        set(target,key,value){
            const res = Reflect.set(target,key,value)
            
            //TODO触发依赖

            return res;
        }
    })

}