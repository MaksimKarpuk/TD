<template>
  <div :class="$style.task">
    <MainCheckbox :text="text" :isChecked="isChecked" />
    <MainButton />
  </div>
</template>

<script>
import MainCheckbox from "@/components/atoms/MainCheckbox";
import MainButton from "@/components/atoms/MainButton";
export default {
  components: {
    MainCheckbox,
    MainButton,
  },
  props: {
    id: String,
    text: String,
    isChecked: Boolean,
  },
};
</script>

<style lang='scss' module>
@import "@/assets/styles/style";
.task {
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: $whiteOrange;
  border-radius: 0.75rem;
}
</style>