<template>
  <div>
    <div :class="$style.task" @click="open">
      <MainCheckbox
        :text="text"
        :isChecked="isChecked"
        :id="id"
        :isDisabled="isDisabled"
      />
      <MainButton :id="id" />
    </div>
    <div v-show="isShow" :class="$style.subtasks">
      <div v-if="subTasks.length > 0">
        <div
          v-for="subtask in subTasks"
          :key="subtask.id"
          :class="$style.subtask"
        >
          <SubtaskCheckbox
            :text="subtask.text"
            :isChecked="subtask.isChecked"
            :id="subtask.id"
            :mainId="id"
          />
          <SubtaskButton :id="subtask.id" :mainId="id" />
        </div>
      </div>
      <div :class="$style.hidden" v-else>Subtasks are over</div>
      <div>
        <form @submit.prevent="subSubmit">
          <input
            type="text"
            :class="$style.input"
            placeholder="Add a new subtask"
            v-model="subtext"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import MainCheckbox from "@/components/atoms/MainCheckbox";
import MainButton from "@/components/atoms/MainButton";
import SubtaskCheckbox from "@/components/atoms/SubtaskCheckbox";
import SubtaskButton from "@/components/atoms/SubtaskButton";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      subtext: "",
    };
  },
  computed: mapGetters(["getFilteredTasks"]),
  methods: {
    ...mapMutations(["addSubTask", "openSubTasks"]),
    subSubmit() {
      this.addSubTask({ subtext: this.subtext, id: this.id });
      this.subtext = "";
    },
    open() {
      this.openSubTasks(this.id);
    },
  },
  components: {
    MainCheckbox,
    MainButton,
    SubtaskCheckbox,
    SubtaskButton,
  },
  props: {
    id: String,
    text: String,
    isChecked: Boolean,
    subTasks: Array,
    isShow: Boolean,
    isDisabled: Boolean,
  },
};
</script>

<style lang='scss' module>
@import "@/assets/styles/style";
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: $whiteOrange;
  border-radius: 0.75rem;
  margin: 1rem 0 0 0;
}
.subtasks {
  .subtask {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: $subtaskBg;
    border: 0.0625rem solid $whiteOrange;
  }
  .hidden {
    color: $brown;
    font-size: 1.3rem;
    text-align: center;
    margin: 1rem 0;
  }
}
.input {
  width: 100%;
  padding: 1rem;
  background: $addWhite;
  border: 0.0625rem solid $whiteOrange;
  border-top: none;
  border-radius: 0 0 0.75rem 0.75rem;
  box-sizing: border-box;
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
  }
}
</style>