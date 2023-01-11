function effect (fn,option={}){
    const effectFn = ()=>{
        cleanup(effectFn)
        activeEffect = effectFn
        
    }
}