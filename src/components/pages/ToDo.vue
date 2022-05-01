<template>
  <div class="content">
    <div class="boader">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/organisms/Header";
import Main from "@/components/organisms/Main";
import Footer from "@/components/organisms/Footer";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/style.scss";
.content {
  height: 100vh;
  background: linear-gradient(104.11deg, #ff7e5f 14.52%, #feb567 87.26%);
  .boader {
    position: relative;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 33.75rem;
    background-color: $boaderWhite;
    border: 0.0625rem solid $lightOrange;
    box-sizing: border-box;
    box-shadow: 0 0.5rem 2.1rem 0.3rem $boaderOrange;
  }
}
</style>
