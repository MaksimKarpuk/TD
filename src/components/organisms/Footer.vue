<template>
  <div :class="$style.footer">
    <FooterText />
    <div :class="$style.tabs">
      <FooterButtons
        v-for="tab in tabs"
        :key="tab.id"
        :text="tab.text"
        :isChecked="tab.isChecked"
      />
    </div>
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
  data() {
    return {
      tabs: [
        {
          id: "1",
          text: "All",
          isChecked: true,
        },
        {
          id: "2",
          text: "Active",
          isChecked: false,
        },
        {
          id: "3",
          text: "Completed",
          isChecked: false,
        },
      ],
    };
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

