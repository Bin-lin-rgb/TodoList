<template>
  <!-- List 组件应该有4种呈现效果：welcome、loading、users、error -->
  <div class="row">
    <div class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>

    <h2 v-show="info.isFirst">Welcome!</h2>
    <h2 v-show="info.isLoading">IsLoading...</h2>
    <h2 v-show="info.errMsg">{{info.errMsg}}</h2>

  </div>

</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  methods: {
    updateData(dataObj) {
      // 有重复的以传进来的为准，避免参数顺序不对&&传参数不够导致丢失
      this.info = {...this.info,...dataObj}
    },
  },
  mounted() {
    this.$bus.$on("updateData", this.updateData);
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>