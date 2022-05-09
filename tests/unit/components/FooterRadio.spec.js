import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import FooterRadio from "@/components/atoms/FooterRadio";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for FooterRadio", () => {
  let store;
  let mutations;
  let getters;

  beforeEach(() => {
    mutations = {
      changeRadioValue: jest.fn(),
    };
    getters = {
      getTabs: jest.fn(),
    };

    store = new Vuex.Store({
      mutations,
      getters,
    });
  });

  it('call "FooterRadio"', () => {
    const wrapper = shallowMount(FooterRadio, { store, localVue });
    wrapper.find("input").trigger("click");
    expect(mutations.changeRadioValue).toHaveBeenCalled();
  });
});
