// function SuperType(){
//     this.property = true;
// }

// SuperType.prototype.getSuperValue = function(){
//     return this.property;
// }

// function SubType(){
//     this.subproperty = false;
// }

// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function(){
//     return this.subproperty;
// };

// let instance = new SubType();
// console.log(instance.getSubValue())



//  原型链扩展了前面描述的原型搜索机制，我们知道，在读取实例上的属性时，首先会在实例上搜索这个属性。如果没找到，则会继承搜索实例的原型。在通过原型链实现继承之后，搜索就可以继承向上
// 搜索原型的原型，对一下的例子而言，调用instance.getSuperValue()经过3步搜索：
//  instance 、SubType.prototype和SuperType.prototype
// 最后一步才找到这个方法。对属性和方法的搜索会一直持续到原型链的末端
// 最后原型链末端就是null 




// 
function SuperType() {
    this.property = true;
  }
  SuperType.prototype.getSuperValue = function() {
    return this.property;
  };
  function SubType() {
    this.subproperty = false;
  }
  // 继承SuperType
  SubType.prototype = new SuperType();
  SubType.prototype.getSubValue = function () {
    return this.subproperty;
  };
  let instances = new SubType();
  console.log(instances.getSuperValue()); // true


//   原型与实例的关系可以通过两种方式来确定。
// 第一种方式是使用instanceof操作符，如果一个实例的原型链中出现相应的构造函数。则instanceof返回true
console.log(instances instanceof Object)
console.log(instances instanceof SuperType)
console.log(instances instanceof SubType)

// 第二种方式是使用isPrototypeOf() 方法，原型链中的每个原型都可以调用这个方法。
console.log(Object.prototype.isPrototypeOf(instances))
console.log(SuperType.prototype.isPrototypeOf(instances))
console.log(SubType.prototype.isPrototypeOf(instances))


class Tripple {
    static tripples(n = 1) {
      return n * 3;
    }
  }
  
  
  class BiggerTripple extends Tripple {
    static tripple(n) {
      return super.tripples(n) * super.tripples(n);
    }
  }
  
  
//   console.log(Tripple.tripple());// 3
//   console.log(Tripple.tripple(6));// 18
  
  let tp = new Tripple();
  
  console.log(BiggerTripple.tripple(3));// 81（不会受父类实例化的影响）
//   console.log(tp.tripple());// 'tp.tripple 不是一个函数'.
  