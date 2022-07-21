<template>
  <div class="todo-footer" v-show="sum">
    <label>
      <input type="checkbox" v-model="ChangeAll" />
    </label>
    <span>
      <span>已完成{{ TotalDone }}</span> /全部{{ sum }}
    </span>
    <button class="btn btn-danger" @click="HandleDeleteAll">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos", "clearAllTodo", "checkAllTodo"],
  computed: {
    sum() {
      return this.todos.length;
    },

    TotalDone() {
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0);
      }, 0);
    },
    ChangeAll: {
      //全选框是否勾选
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      //isAll被修改时set被调用
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    HandleDeleteAll() {
      this.clearAllTodo();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>