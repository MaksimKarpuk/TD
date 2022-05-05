<template>
  <div :class="$style.footer">
    <FooterText />
    <div :class="$style.tabs">
      <FooterButtons
        v-for="tab in getFooterTabs"
        :key="tab.id"
        :id="tab.id"
        :text="tab.text"
        :isChecked="tab.isChecked"
      />
    </div>
  </div>
</template>

<script>
import FooterButtons from "@/components/molecules/FooterButtons";
import FooterText from "@/components/atoms/FooterText";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getFooterTabs"]),
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
  .tabs {
    display: flex;
    gap: 1rem;
  }
}
</style>

