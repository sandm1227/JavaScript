## Event Loop
### 浏览器中的Event Loop

#### 浏览器中的Event Loop的执行顺序如下： 
>1. 首先执行同步代码，这属于宏任务
>2. 同步代码执行完成后，执行栈为空。检查是否有异步代码需要执行
>3. 执行所有的微任务
>4. 当执行完微任务后，有必要会渲染页面
>5. 然后开始下一轮Event Loop，执行宏任务中的异步代码，也就是setTimeout中的回调函数

#### 代码例题1
````javascript
console.log('script start');
async function async1() {
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2 end');
}
async1();
setTimeout(function() {
    console.log('setTimeout');
}, 0)
new Promise(resolve => {
    console.log('Promise')
    resolve()
}).then(function() {
    console.log('Promise1')
}).then(function() {
    console.log('Promise2')
})
console.log('script end');

// 执行结果
// script start
// async2 end
// Promise
// script end
// async1 end
// Promise1
// Promise2
// setTimeout
````


#### 代码例题2
````javascript
async function async1() {
    console.log('async1 start')
    await async2();
    console.log('async1 end');
}
async function async2(){
    console.log('async2')
}
console.log('script start')
setTimeout(function() {
    console.log('setTimeout')
}, 0)
async1()
new Promise(function(resolve){
    console.log('promise')
    resolve()
}).then(function() {
    console.log('promise2')
})
console.log('script end')

// 执行结果
// script start
// async1 start
// async2
// promise
// script end
// async1 end
// promise2
// setTimeout
````

#### 代码例题3
````javascript
console.log('start');
setTimeout(() => {
    console.log('children2')
    Promise.resolve().then(() => {
        console.log('children3')
    })
},0)
new Promise(function(resolve, reject){
    console.log('children4');
    setTimeout(function() {
        console.log('children5');
        resolve('children6')
    }, 0)
}).then((res) => {
    console.log('children7');
    setTimeout(() => {
        console.log(res);
    }, 0)
})

// 执行结果
// start
// children4
// children2
// children3
// children5
// children7
// children6
````