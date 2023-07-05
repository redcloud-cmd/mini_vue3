import {h} from 'vue'

const App ={
    render(){
        return h('div',{
            id:"hello",

        } ,[h('span','world')])
    }
}