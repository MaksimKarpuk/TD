import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Main from "@/components/organisms/Main";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Main", () => {
  let store;
  let mutations;
  let getters;
  let actions;

  beforeEach(() => {
    mutations = {
      addTask: jest.fn(),
    };
    getters = {
      getFilteredTasks: () => [],
    };
    actions = {
      getFromStorage: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
      getters,
      actions,
    });
  });

  it('call "addTask"', () => {
    const wrapper = shallowMount(Main, { store, localVue });
    wrapper.find("form").trigger("submit.prevent");
    expect(mutations.addTask).toHaveBeenCalled();
  });
});
