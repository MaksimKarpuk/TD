<template>
  <div id="app">
    <FirstPage />
  </div>
</template>

<script>
import FirstPage from "@/components/firstPage.vue";

export default {
  name: "App",
  components: {
    FirstPage,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/style.scss";
@import "@/assets/styles/folder.scss";
</style>
