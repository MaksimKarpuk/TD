<template>
  <label :class="$style.task">
    <input
      type="checkbox"
      :class="$style.checkbox"
      :checked="isChecked"
      @click="change"
    />
    <span :class="$style.checkboxHidden"></span>
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
    mainId: String,
  },
  methods: {
    ...mapMutations(["changeSubCheckboxValue"]),
    change() {
      this.changeSubCheckboxValue({ id: this.id, mainId: this.mainId });
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style";
.task {
  .text {
    color: $brown;
    font-size: 1.25rem;
  }
  display: flex;
  gap: 1.3rem;
  align-items: center;
  .checkbox {
    width: 1.4rem;
    height: 1.4rem;
    display: none;
  }
  .checkboxHidden {
    width: 1.4rem;
    height: 1.4rem;
    border: 0.0625rem solid $orange;
    border-radius: 0.35rem;
    position: relative;
    cursor: pointer;
    &::before {
      content: "\2713";
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      color: $white;
      position: absolute;
      left: -0.05rem;
      top: -0.05rem;
      border-radius: 0.35rem;
      opacity: 0;
      transition: 0.5s;
    }
  }
  .checkbox:checked + .checkboxHidden::before {
    opacity: 1;
    background: $orange;
  }
}
</style>