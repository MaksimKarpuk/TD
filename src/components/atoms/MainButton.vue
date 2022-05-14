<template>
  <button :class="$style.button" @click="remove" data-remove-e2e></button>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    id: String,
  },
  methods: {
    ...mapMutations(["removeTask"]),
    remove() {
      this.removeTask(this.id);
    },
  },
};
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