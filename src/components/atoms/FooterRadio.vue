<template>
  <label :class="$style.tab">
    <input type="radio" name="radio" :class="$style.radio"/>
    <span :class="$style.text">All</span>
  </label>
</template>

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