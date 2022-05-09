import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import MainButton from "@/components/atoms/MainButton";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for MainButton", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      removeTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "removeTask"', () => {
    const wrapper = shallowMount(MainButton, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(mutations.removeTask).toHaveBeenCalled();
  });
});
