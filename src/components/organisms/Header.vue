<template>
  <div :class="$style.title">To Do List</div>
</template>

<style lang="scss" module>
@import "@/assets/styles/style";
.title {
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $brown;
  background: $lightOrange;
  padding: 1rem 0;
}
</style>