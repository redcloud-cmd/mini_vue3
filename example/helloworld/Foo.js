import { h } from "vitest/dist/index-6e18a03a"

export const Foo = {
    setup(props){
        console.log(props)
    },
    render(){
        return h('div',{},"foo:"+this.count)
    }
}