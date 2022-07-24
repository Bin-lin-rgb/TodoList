<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="KeyWord"
      />&nbsp;
      <button @click="SearchUser">Search</button>
    </div>
  </section>
  <!-- section的作用是对页面上的内容进行分块，
        如各个有标题的版块、功能区或对文章进行分段，
        不要与有自己完整、独立内容的article混淆。
        html5引入了<section>标签，用于描述文档的结构，
        它同<div>标签的意思一样。 
    -->
</template>

<script>
import axios from "axios";
export default {
  name: "UserSearch",
  data() {
    return {
      KeyWord: "",
    };
  },
  methods: {
    SearchUser() {
      // 请求之前
      this.$bus.$emit("updateData", {
        isFirst: false,
        isLoading: true,
        users: [],
        errMsg: "",
      });
      axios.get(`https://api.github.com/search/users?q=${this.KeyWord}`).then(
        (response) => {
          console.log("success");
          // 请求成功后
          this.$bus.$emit("updateData", {
            isLoading: false,
            users: response.data.items,
            errMsg: "",
          });
        },
        (error) => {
          // 请求失败后
          console.log("false", error.message);
            this.$bus.$emit("updateData", {
            isLoading: false,
            users: [],
            errMsg: error.message,
          });
        }
      );
    },
  },
};
</script>
