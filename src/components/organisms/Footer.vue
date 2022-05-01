<template>
  <div :class="$style.footer">
    <FooterText />
    <FooterButtons />
  </div>
</template>

<script>
import FooterButtons from "@/components/molecules/FooterButtons";
import FooterText from "@/components/atoms/FooterText";
export default {
  components: {
    FooterButtons,
    FooterText,
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style";
.footer {
  display: flex;
  padding: 0.74rem 1.85rem;
  justify-content: space-between;
  align-items: center;
  background: $lightOrange;
}
</style>

