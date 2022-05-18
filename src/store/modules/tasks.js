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
    tasks: [],
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
    addSubTask(state, newSubInfo) {
      const { id, subtext } = newSubInfo;
      for (let i = 0; i <= state.tasks.length - 1; i++) {
        if (state.tasks[i].id === id) {
          state.tasks[i].subTasks.push({
            id: uuidv4(),
            text: subtext,
            isChecked: false,
          });
        }
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    openSubTasks(state, id) {
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isShow: !task.isShow } : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeSubtask(state, { id, mainId }) {
      for (let i = 0; i <= state.tasks.length - 1; i++) {
        if (state.tasks[i].id === mainId) {
          state.tasks[i].subTasks = state.tasks[i].subTasks.filter(
            (subtask) => subtask.id !== id
          );
        }
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    changeSubCheckboxValue(state, { id, mainId }) {
      for (let i = 0; i <= state.tasks.length - 1; i++) {
        if (state.tasks[i].id === mainId) {
          state.tasks[i].subTasks = state.tasks[i].subTasks.map((subtask) =>
            subtask.id === id
              ? { ...subtask, isChecked: !subtask.isChecked }
              : subtask
          );
          let arr = state.tasks[i].subTasks.filter(
            (subtask) => subtask.isChecked === false
          );
          if (arr.length === 0) {
            state.tasks[i].isChecked = true;
            state.tasks[i].isDisabled = true;
          } else {
            state.tasks[i].isChecked = false;
            state.tasks[i].isDisabled = false;
          }
        }
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    addTask(state, newText) {
      if (newText) {
        state.tasks.push({
          id: uuidv4(),
          text: newText,
          isChecked: false,
          subTasks: [],
          isShow: false,
          isDisabled: false,
        });
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
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
