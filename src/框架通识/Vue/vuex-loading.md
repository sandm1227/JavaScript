## 实现请求数据的loading效果有两种方式
* actions里进行封装

#### store/index.js
````js
export default new Vuex.Store({
    modules: {},
    state: {
        effects: {}
    },
    mutations: {
        showLoading(state, payload) {
            state.effects = {
                ...state.effects,
                [payload]: true
            }
        },
        hideLoading(state, payload) {
            state.effects = {
                ...state.effects,
                [payload]: false
            }
        }
    },
    actions: {
        /* 需要loading效果的dispatch这个action方法 */
        async fetchDataList({ commit }, payload) {
            commit('showLoading', payload.loadingType);
            /** 其他操作 */
            commit('hideLoading', payload.loadingType);
        }
    }
})
````

* 封装一个vuex-loading插件
>1. 封装函数中，使用registerModule注册一个动态loading模块
>2. 使用subscribeAction指定派发每个action之前和之后进行一些操作
#### vuex-loading.js
````js
const NAMESPACED = 'myLoading'
createLoadingPlugin = ({namespace = NAMESPACED} = {}) => {
    return store => {
        if(store.state[namespace]) {
            throw new Error('createLoadingPlugin is exited in current store')
        }
        store.registerModule(namespace, {
            namespaced: true,
            state: {
                effects: {}
            },
            mutations: {
                showLoading(state, payload) {
                    state.effects = {
                        ...state.effects,
                        [payload]: true
                    }
                },
                hideLoading(state, payload) {
                    ...state.effects,
                    [payload]: false
                }
            }
        })
        store.subscribeAction({
            before:(action, state) => {
                console.log(`before action ${action.type}`);
                store.commit(namespace+'/showLoading', action.type)
            },
            after: (action, state) => {
                console.log(`before action ${action.type}`)
                store.commit(namespace+'/hideLoading', action.type)
            }
        })
    }
}

export default createLoadingPlugin
````

#### store/index.js
````js
import createLoadingPlugin from 'utils/vuex-loading.js'

export default new Vuex.Store({
    plugins: [createLoadingPlugin()]
})
````