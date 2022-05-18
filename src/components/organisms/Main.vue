<template>
  <div :class="$style.main">
    <div v-if="getFilteredTasks.length > 0" @click="isClick!=isClick" :class="{[$style.active]: isClick}"  data-tasks-e2e>
      <MainTask
        v-for="task in getFilteredTasks"
        :key="task.id"
        :text="task.text"
        :isChecked="task.isChecked"
        :id="task.id"
        :subTasks="task.subTasks"
        :isShow="task.isShow"
        :isDisabled="task.isDisabled"
      />
    </div>
    <div :class="$style.hidden" v-else>Tasks are over</div>
    <div>
      <form @submit.prevent="submit" data-input-e2e>
        <input
          type="text"
          :class="$style.input"
          placeholder="Add a new task"
          v-model="text"
        />
      </form>
    </div>
  </div>
</template>

<script>
import MainTask from "@/components/molecules/MainTask";
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: mapGetters(["getFilteredTasks"]),
  components: {
    MainTask,
  },
  data() {
    return {
      text: "",
      isClick: true,
    };
  },
  mounted() {
    this.$store.dispatch("getFromStorage");
  },
  methods: {
    ...mapMutations(["addTask"]),
    submit() {
      this.addTask(this.text);
      this.text = "";
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style";
.main {
  padding: 0.5rem 2rem 2rem 2rem;
  .hidden {
    color: $brown;
    font-size: 1.5rem;
    text-align: center;
    margin: 1rem 0;
  }
  .input {
    width: 100%;
    padding: 1rem;
    background: $addWhite;
    border: 0.0625rem dashed $lightOrange;
    box-sizing: border-box;
    border-radius: 0.7rem;
    text-align: center;
    font-family: "Inter";
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: $brown;
    margin: 1rem 0 0 0;
    &::placeholder {
      color: $lightOrange;
    }
    &:focus {
      outline: 0;
      border: none;
      background: $whiteOrange;
      border-radius: 0.75rem;
    }
  }
}
.active {
  border-radius: 0.75rem 0.75rem 0 0;
}
</style>