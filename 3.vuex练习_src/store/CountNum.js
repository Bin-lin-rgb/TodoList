export default {
    namespaced: true,//开启命名空间
    actions: {
        // context ≈ mini Store
        AddIfOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit("ADD", value)
            }
        },
        AddDelay(context, value) {
            setTimeout(() => {
                context.commit("ADD", value)
            }, 1000)
        }
    },
    mutations: {
        ADD(state, value) {
            // console.log(context,value);
            state.sum += value
        },
        SUB(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0, //当前的和
        welcome: 'HELLO!',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}