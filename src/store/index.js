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
  },
  getters: {
    getFooterTabs(state) {
      return state.tabs
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
