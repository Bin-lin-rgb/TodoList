<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :AddTodo="AddTodo" />
        <TodoList
          :todos="todos"
          :CheckedTodo="CheckedTodo"
          :DeleteTodo="DeleteTodo"
        />
        <TodoFooter
          :todos="todos"
          :checkAllTodo="checkAllTodo"
          :clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
//引入组件

import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      // 拿到浏览器缓存并解析，如果为空，则使用空数组而不是 null ，避免 Footer 读取 .length 报错
      todos:JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  watch:{
    todos:{
      // 开启深度监视
      deep:true,
      handler(value){
        return localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  methods: {
    AddTodo(todo) {
      this.todos.unshift(todo);
    },

    CheckedTodo(TodoId) {
      this.todos.forEach((todo) => {
        if (todo.id == TodoId) {
          todo.done = !todo.done;
        }
      });
    },

    DeleteTodo(TodoId) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== TodoId;
      });
    },

    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },

    //清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>