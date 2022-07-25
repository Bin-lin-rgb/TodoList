import Vue from "vue";
import Vuex from 'vuex'

import CountNum from "./CountNum"
import PersonInfo from "./PersonInfo"

Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules: {
        CountNum,
        PersonInfo
    }
})

