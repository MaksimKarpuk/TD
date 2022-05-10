import vuex from "@/store/modules/tasks";
export default {
  state: {
    tabs: [
      {
        id: "1",
        text: "All",
        isChecked: true,
      },
      {
        id: "2",
        text: "Active",
        isChecked: false,
      },
      {
        id: "3",
        text: "Completed",
        isChecked: false,
      },
    ],
    tasks: [{ id: "1", text: "newText", isChecked: false }],
    filter: "All",
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters,
};
