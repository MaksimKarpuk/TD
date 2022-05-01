<template>
  <button :class="$style.button"></button>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "@/assets/styles/style";
.button {
  width: 1.4rem;
  height: 1.4rem;
  border: 0.0625rem solid $lightOrange;
  border-radius: 0.35rem;
  color: $lightOrange;
  text-align: center;
  background: $whiteOrange;
  cursor: pointer;
  &::before {
    content: "\2716";
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:focus {
    color: $orange;
    border: 0.0625rem solid $orange;
  }
}
</style>