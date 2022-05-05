<template>
  <label :class="$style.tab">
    <input
      type="radio"
      name="radio"
      :class="$style.radio"
      @click="changeRadio"
    />
    <span :class="$style.text">{{ text }}</span>
  </label>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    id: String,
    text: String,
    isChecked: Boolean,
  },
  methods: {
    ...mapMutations(["changeRadioValue"]),
    changeRadio() {
      this.changeRadioValue(this.id);
      console.log(this.isChecked);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style";
.tab {
  .radio {
    width: 1rem;
    height: 1rem;
    display: none;
  }
  .text {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: $brownRGBA;
    border: none;
    border-radius: 0.35rem;
    padding: 0.35rem;
    cursor: pointer;
  }
  .radio:checked ~ .text {
    border: 0.0625rem solid $brownRGBA;
  }
}
</style>