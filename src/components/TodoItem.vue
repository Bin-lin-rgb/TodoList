<template>
  <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__bounceIn"
    leave-active-class="animate__bounceOut"
  >
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="HandleChecked(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          @keyup.enter="handleBlur(todo, $event)"
          ref="inputTitle"
        />
        <!-- 当一个元素失去焦点的时候 blur 事件被触发。 -->
        <!-- @blur和@keyup.enter都想触发同一事件 -->
      </label>
      <button class="btn btn-danger" @click="HandleDelete(todo.id)">
        删除
      </button>
      <button
        v-show="!todo.isEdit"
        class="btn btn-normal"
        @click="HandleEdit(todo)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import "animate.css";

export default {
  name: "TodoItem",

  props: ["todo"],

  methods: {
    HandleChecked(id) {
      // this.CheckedTodo(id);
      this.$bus.$emit("CheckedTodo", id);
    },
    HandleDelete(id) {
      // this.DeleteTodo(id);
      if (confirm("确定删除吗？")) {
        this.$bus.$emit("DeleteTodo", id);
      }
    },
    HandleEdit(todo) {
      // todo.hasOwnProperty('isEdit') 报错
      // 不要从目标对象访问 Object 原型方法，想到一种解决方案:用 call 改变指向调用
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      // 执行完整个函数才重新解析模板，所以获取焦点借用 nextTick
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) {
        return alert("输入不能为空！");
      }
      this.$bus.$emit("editTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: rgb(225, 242, 248);
}

li:hover button {
  display: block;
}

.todo-enter-active {
  animation: TODOITEM 0.4s linear;
}

.todo-leave-active {
  animation: TODOITEM 0.4s linear reverse;
}

@keyframes TODOITEM {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>