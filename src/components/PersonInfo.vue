<template>
  <div>
    <h2>Person List</h2>

    <h3>Count组件的sum:{{ sum }}</h3>

    <input type="text" v-model="InputName" />

    <button type="button" class="btn btn-info" @click="AddPerson">添加</button>
    <button type="button" class="btn btn-info" @click="AddWang">添加Wang姓</button>
    <button type="button" class="btn btn-info" @click="AddCasual">添加随机名</button>

    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "PersonInfo",
  data() {
    return {
      InputName: "",
    };
  },
  computed: {
    ...mapState("CountNum", ["sum"]),
    ...mapState("PersonInfo", ["personList"]),
  },

  methods: {
    AddPerson() {
      const PersonObj = {
        id: nanoid(),
        name: this.InputName,
      };
      this.$store.commit("PersonInfo/ADD_PERSON", PersonObj);
      this.InputName = "";
    },
    AddWang() {
      const PersonObj = {
        id: nanoid(),
        name: this.InputName,
      };
      this.$store.dispatch("PersonInfo/add_wang", PersonObj);
      this.InputName = "";
    },
    AddCasual() {
      this.$store.dispatch("PersonInfo/add_casual");
    },
  },
  mounted() {
  },
};
</script>

<style>
</style>