// 箭头函数解决了2大问题
// 1.简化了回调函数
// 2.将this的指向固定化，很利于封装回调函数

// ECMAScript6 : ES3 ES5
// ES6 第6个版本
// ES6中新特性：
// let const;解构赋值；数据类型的原型扩展；箭头函数；promise；generator；class定义类
// proxy，Set，Map，模块化
// 在vue，react中使用箭头函数比较多

// Array.prototype.includes 数组原型上新增的方法
// 返回值是一个boolean值，用来检测数组是否包含这一项，包含返回true，不包含返回false
// includes有第二个参数，是开始检测的索引位置
// 缺点：不能对引用数据类型进行检测
// 可检测出特殊值NaN，indexOf不能
// includes 和 indexOf 进行的是 绝对比较
let ary = ["a", "b", "c", "a", [1,2], NaN, 1]
ary.includes(NaN) // true
ary.includes("1") // false
NaN === NaN // false
ary.indexOf(NaN) // -1
// ary.__proto_.includes
// Array.prototype.indexOf
// 返回值为一个索引
// 用来检测数组成员在数组中第一次出现的索引位置，如果不存在，返回-1

// Promise：ES6
// async/await函数: 属于ES8内容
// Promise：承诺
console.log(Promise) // 内置类
// 定时器 ajax Promise
// Promise: pending fulfilled rejected
// pending --> fulfilled
// pending --> rejected
// Promise的状态一旦凝固，不能再进行修改
let p1 = new Promise(function(resolve, reject) {
    // 该函数是Promise的一个回调函数
    // resolve， reject 是两个函数；resolve执行，就会将pending状态变为成功态
    // rejected执行，就会将pending状态变为失败态
    // resolve执行会调用then的第一个回调函数，reject函数执行会调用第二个回调函数
    setTimeout(function() {
        // resolve();
        // reject()
    }, 1000)
})
// Promise支持链式调用，解决回调地狱问题
console.log(p1)
p1.then(function() {
    // 成功状态执行的回调
}, function() {
    // 失败状态执行的回调
})
.catch(function() {
    // 捕获
})
// Promise.all 并行处理多个异步请求
Promise.all().then(function() {

})
// Promise.race


// async await函数是generator函数的语法糖
// 内置执行器
// 定义一个一步操作，默认返回一个Promise，并且是成功的
async function fn() {
    return 100
}
fn().then(function(val) {
    console.log(val)
})
// await 放在异步的前面 

// 如何获取一个对象的长度
let obj = {name: "111", age: "10", school: "333"}
Object.entries()  // 不在Object.prototype上，是Object的私有属性
Object.values()
// 会按照for...in循环的方式放到数组中
Object.myEntries = function(obj) {
    let arr = [];
    for(let key in obj) {
        // arr.push([key, obj[key]])
        // arr.push(obj[key])
    }
    return arr
}
Object.keys()

// https://www.cnblogs.com/EnSnail/p/9866130.html
// 考察es6中的class，promise等