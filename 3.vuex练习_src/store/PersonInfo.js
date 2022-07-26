import axios from "axios"
import { nanoid } from "nanoid"

export default {
    namespaced: true,//开启命名空间
    actions: {
        add_wang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('姓王才能添加！')
            }
        },
        add_casual(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        },
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        },

    },
    state: {
        personList: [{ id: "001", name: '张三' }]
    },
    getters: {

    }
}