import { createLocalVue } from "@vue/test-utils";
import Vuex, { mapGetters } from "vuex";
import storeConfig from "./store.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("tests for store", () => {
  it("createTask", () => {
    let newText = "newText";
    store.commit("addTask", newText);
    expect(store.state.tasks[0].text).toBe(newText);
    expect(store.state.tasks[0].isChecked).toBe(false);
  });
  it("removeTask", () => {
    let length = store.state.tasks.length;
    store.commit("removeTask", "id");
    let lengthArray = store.state.tasks.length;
    expect(length).toBe(lengthArray);
  });
  it("changeCheckboxValue", () => {
    let checkbox = store.state.tasks.isChecked;
    store.commit("changeCheckboxValue", "id");
    let newCheckbox  = store.state.tasks.isChecked;
    expect(checkbox).toBe(newCheckbox);
  });
  it("changeRadioValue", () => {
    let radio = store.state.tabs.isChecked;
    store.commit("changeRadioValue", "text");
    let newRadio  = store.state.tabs.isChecked;
    expect(radio).toBe(newRadio);
  });
  // it("getFooterTabs", () => {
  //   expect(mapGetters.getFooterTabs.length).toBe(3);
  // });
});
