import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import MainCheckbox from "@/components/atoms/MainCheckbox";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for MainCheckbox", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
        changeCheckboxValue: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "changeCheckboxValue"', () => {
    const wrapper = shallowMount(MainCheckbox, { store, localVue });
    wrapper.find("input").trigger("click");
    expect(mutations.changeCheckboxValue).toHaveBeenCalled();
  });
});
