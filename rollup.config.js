import vue from 'rollup-plugin-vue'
export default{
    input :'./src/App.vue',
    output:{
        // es module
        format:'es',
        name:'vue',//import XX from 'vue'->vue.esm.js        //文件名称
        file:"lib/vue.esm.js",

    },
    plugins:[vue()]
}