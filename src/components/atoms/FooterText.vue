<template>
  <div :class="$style.text">
    {{ getActiveTasks }}/{{ getMainTasks.length }} left
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getActiveTasks", "getMainTasks"]),
};
</script>
<style lang="scss" module>
@import "@/assets/styles/style";
.text {
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: $brownRGBA;
}
</style>