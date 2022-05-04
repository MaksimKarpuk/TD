import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

export default new Vuex.Store({
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
  },
  getters: {
    getFooterTabs(state) {
      return state.tabs;
    },
    getMainTasks(state) {
      return state.tasks;
    },
    getMainTasksLength(state) {
      return state.tasks.length;
    },
  },
  mutations: {
    addTask(state, newText) {
      state.tasks.push({
        id: uuidv4(),
        text: newText,
        isChecked: false,
      });
    },
    removeTask (state,id) {
      state.tasks.splice(id,1);
    },
  },
  actions: {},
  modules: {},
});
