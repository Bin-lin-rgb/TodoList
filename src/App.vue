<template>
  <div class="container">
    <CountNum/>
    <hr>
    <PersonInfo/>
  </div>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.min.css";

  import CountNum from "./components/CountNum";
  import PersonInfo from "./components/PersonInfo";

  export default {
    name:'App',
    components: {
      CountNum,
      PersonInfo
    },
  };
</script>

