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
    getActiveTasks(state) {
      return state.tasks.filter((task) => task.isChecked === false).length;
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
    removeTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    changeCheckboxValue(state, id) {
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      );
      // for (let i = 0; i < state.tasks.length - 1; i++) {
      //   if (state.tasks[i].id === id) {
      //     state.tasks[i].isChecked = !state.tasks[i].isChecked;
      //   }
      // }
      // console.log(state.tasks);
    },
    changeRadioValue (state, id) {
      state.tabs = state.tabs.map((tab) =>
        tab.id === id ? { ...tab, isChecked: !tab.isChecked } : tab
      );
      console.log(state.tabs);
  },
  },
  actions: {},
  modules: {},

});
