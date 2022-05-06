<template>
  <div :class="$style.main">
    <div v-if="getFilteredTasks.length > 0">
      <MainTask
        v-for="task in getFilteredTasks"
        :key="task.id"
        :text="task.text"
        :isChecked="task.isChecked"
        :id="task.id"
      />
    </div>
    <div :class="$style.hidden" v-else>Tasks are over</div>
    <div>
      <form @submit.prevent="submit">
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
import { mapGetters, mapMutations} from "vuex";
export default {
  computed: mapGetters(["getMainTasks", "getFilteredTasks"]),
  components: {
    MainTask,
  },
  data() {
    return {
      text: "",
    };
  },
  mounted(){
     this.$store.dispatch("getFromStorage")
  },
  methods: {
    ...mapMutations(["addTask"]),
    submit() {
      if (this.text) {
        this.addTask(this.text);
        this.text = "";
      }
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style";
.main {
  padding: 2rem;
  .hidden {
    color: $brown;
    font-size: 1.5rem;
    text-align: center;
    margin: 0 0 2rem 0;
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
</style>