import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
    // context ≈ mini Store
    AddIfOdd(context,value){
        if (context.state.sum % 2) {
            context.commit("ADD",value)
        }
    },
    AddDelay(context,value){
        setTimeout(()=>{
            context.commit("ADD",value)
        },1000)
    }
}
//准备mutations——用于操作数据（state）
const mutations = {
    ADD(state,value){
        // console.log(context,value);
        state.sum += value
    },
    SUB(state,value){
        state.sum -= value
    }
}
//准备state——用于存储数据
const state = {
	sum:0 //当前的和
}

//创建并暴露store
const store = new Vuex.Store({
	actions,
	mutations,
	state,
})

export default store