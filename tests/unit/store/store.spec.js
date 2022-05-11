import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./store.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("tests for actions", () => {
  it("getFromStorage", () => {
    store.dispatch("getFromStorage");
    expect(store.state.tasks.length).toBe(0);
  });
});

describe("tests for mutations", () => {
  it("createTask", () => {
    let newText = "newText";
    store.commit("addTask", newText);
    expect(store.state.tasks[0].text).toBe(newText);
    expect(store.state.tasks[0].isChecked).toBe(false);
    store.commit("addTask", newText);
    store.commit("addTask", newText);
    store.commit("addTask", newText);
  });
  it("removeTask", () => {
    let length = store.state.tasks.length;
    store.commit("removeTask", store.state.tasks[0].id);
    expect(store.state.tasks.length).toBe(length - 1);
  });
  it("changeCheckboxValue", () => {
    let checkbox = store.state.tasks[1].isChecked;
    store.commit("changeCheckboxValue", store.state.tasks[1].id);
    expect(store.state.tasks[1].isChecked).toBe(!checkbox);
  });
  it("changeRadioValue", () => {
    let radio = store.state.tabs[1].isChecked;
    store.commit("changeRadioValue", store.state.tabs[1].text);
    expect(store.state.tabs[1].isChecked).toBe(!radio);
  });
});
describe("tests for getters", () => {
  it("getFooterTabs", () => {
    expect(store.getters.getFooterTabs).toBe(store.state.tabs);
  });
  it("getMainTasks", () => {
    expect(store.getters.getMainTasks).toBe(store.state.tasks);
  });
  it("getActiveTasks", () => {
    expect(store.getters.getActiveTasks).toBe(2);
  });
  it("getFilteredTasks", () => {
    store.state.filter = "All";
    expect(store.getters.getFilteredTasks).toBe(store.state.tasks);
    store.state.filter = "Active";
    expect(store.getters.getFilteredTasks.length).toBe(2);
    store.state.filter = "Completed";
    expect(store.getters.getFilteredTasks.length).toBe(1);
  });
});
