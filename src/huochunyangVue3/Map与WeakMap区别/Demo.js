const map = new Map();
const weakmap = new WeakMap([[22, 23], [33, 34]]);
// console.log(map)

function erconst(){
    const foo = {foovalue:1};
    const bar = {barvalue:2};
    map.set(foo,11);
    weakmap.set(bar,21)

    console.log(map.get(foo),'函数内map',map)
    console.log(weakmap.get(bar),'函数内weakmap')
}
erconst()
// (function(){
//         const foo = {foo:1};
//         const bar = {bar:2};
//         map.set(foo,1);
//         weakmap.set(bar,2)
//         console.log(map,'kekek')
//         console.log(weakmap.bar,'jsjdjs')
//     })()
    console.log(map.has('foo'),'函数内map',map.get(foo))
    console.log(map,'函数外map')
console.log(weakmap,'函数外weakmap')