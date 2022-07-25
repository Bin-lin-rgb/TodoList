<template>
  <div>
    <h1>{{ welcome }}</h1>
    <h2>SUM's value is {{ sum }}</h2>

    <h3>SUM * 10 = {{ bigSum }}</h3>

    <h3>Person 组件的个数 : {{personList.length}}</h3>

    <select v-model.number="selectNum">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button type="button" class="B btn btn-info" @click="ADD(selectNum)">
      +
    </button>
    <button type="button" class="B btn btn-info" @click="SUB(selectNum)">
      -
    </button>
    <button type="button" class="B btn btn-info" @click="AddIfOdd(selectNum)">
      奇数就加
    </button>
    <button type="button" class="B btn btn-info" @click="AddDelay(selectNum)">
      延迟1s加
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "CountNum",
  data() {
    return {
      selectNum: 1,
    };
  },
  computed: {
    ...mapState('CountNum',["sum", "welcome"]),
    ...mapState('PersonInfo',['personList']),

    ...mapGetters('CountNum',["bigSum"]),
  },
  methods: {
    // Add() {
    //   this.$store.commit("ADD", this.selectNum);
    // },
    // Sub() {
    //   this.$store.commit("SUB", this.selectNum);
    // },

    ...mapMutations('CountNum',["ADD", "SUB"]),
    // 由于方法名和 Mutations 的不一致 , 不使用简写 , 则写成对象形式
    // ...mapMutations({Add:'ADD'})

    // AddIfOdd() {
    //   this.$store.dispatch("AddIfOdd", this.selectNum);
    // },
    // AddDelay() {
    //   this.$store.dispatch("AddDelay", this.selectNum);
    // },

    ...mapActions('CountNum',["AddIfOdd", "AddDelay"]),
  },
};
</script>

<style scoped>
.B {
  margin: 0 5px 0 5px;
}
</style>