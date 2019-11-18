## 实现请求数据的loading效果有两种方式
* 1. actions里进行封装

* 2. 封装一个vuex-loading插件
>1. 封装函数中，使用registerModule注册一个动态loading模块
>2. 使用subscribeAction指定派发每个action之前和之后进行一些操作