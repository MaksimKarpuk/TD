import { v4 as uuidv4 } from "uuid";
export default {
  state: {
    tabs: [
      {
        id: uuidv4(),
        text: "All",
        isChecked: true,
      },
      {
        id: uuidv4(),
        text: "Active",
        isChecked: false,
      },
      {
        id: uuidv4(),
        text: "Completed",
        isChecked: false,
      },
    ],
    tasks: [
      {
        id: uuidv4(),
        text: "Task 1",
        isChecked: false,
      },
      {
        id: uuidv4(),
        text: "Task 2",
        isChecked: true,
      },
      {
        id: uuidv4(),
        text: "Task 3",
        isChecked: false,
      },
    ],
    filter: "All",
  },
  getters: {
    getFooterTabs(state) {
      return state.tabs;
    },
    getMainTasks(state) {
      return state.tasks;
    },
    getActiveTasks(state) {
      return state.tasks.filter((task) => task.isChecked === false).length;
    },
    getFilteredTasks(state) {
      switch (state.filter) {
        case "Active":
          return state.tasks.filter((task) => task.isChecked === false);
        case "Completed":
          return state.tasks.filter((task) => task.isChecked === true);
        default:
          return state.tasks;
      }
    },
  },
  mutations: {
    addTask(state, newText) {
      state.tasks.push({
        id: uuidv4(),
        text: newText,
        isChecked: false,
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    changeCheckboxValue(state, id) {
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    changeRadioValue(state, text) {
      state.tabs = state.tabs.map((tab) =>
        tab.text === text
          ? { ...tab, isChecked: true }
          : { ...tab, isChecked: false }
      );
      state.filter = text;
    },
    getFromStorage(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks")) || new Array();
    },
  },
  actions: {
    getFromStorage(ctx) {
      ctx.commit("getFromStorage");
    },
  },
};
