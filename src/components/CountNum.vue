<template>
  <div>
    <h2>SUM's value is {{ $store.state.sum }}</h2>
    <select v-model.number="selectNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button type="button" class="B btn btn-info" @click="Add">+</button>
    <button type="button" class="B btn btn-info" @click="Sub">-</button>
    <button type="button" class="B btn btn-info" @click="AddIfOdd">
      奇数就加
    </button>
    <button type="button" class="B btn btn-info" @click="AddDelay">
      延迟1s加 
    </button>
  </div>
</template>

<script>
export default {
  name: "CountNum",
  data() {
    return {
      selectNum: 1,
    };
  },
  methods: {
    Add() {
      this.$store.commit("ADD", this.selectNum);
    },
    Sub() {
      this.$store.commit("SUB", this.selectNum);
    },
    AddIfOdd() {
      this.$store.dispatch("AddIfOdd", this.selectNum);
    },
    AddDelay() {
      this.$store.dispatch("AddDelay", this.selectNum);
    },
  },
};
</script>

<style scoped>
.B {
  margin: 0 5px 0 5px;
}
</style>