import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import FooterText from "@/components/atoms/FooterText";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for FooterText", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getActiveTasks: () => [],
      getMainTasks: () => [],
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it('call "Footer"', () => {
    const wrapper = shallowMount(FooterText, { store, localVue });
    expect(wrapper.isVisible()).toBe(true);
  });
});
