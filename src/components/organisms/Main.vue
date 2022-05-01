<template>
  <div :class="$style.main">
    <MainTask
      v-for="task in tasks"
      :key="task.id"
      :text="task.text"
      :isChecked="task.isChecked"
    />
    <div>
      <input type="text" :class="$style.input" placeholder="Add a new task" />
    </div>
  </div>
</template>

<script>
import MainTask from "@/components/molecules/MainTask";
export default {
  components: {
    MainTask,
  },
  data() {
    return {
      tasks: [
        {
          id: "1",
          text: "Task 1",
          isChecked: false,
        },
        {
          id: "2",
          text: "Task 2",
          isChecked: true,
        },
        {
          id: "3",
          text: "Task 3",
          isChecked: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/style";
.main {
  padding: 2rem;
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