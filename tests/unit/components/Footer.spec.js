import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Footer from "@/components/organisms/Footer";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Footer", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
        getFooterTabs: jest.fn()
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it('call "Footer"', () => {
    const wrapper = shallowMount(Footer, { store, localVue });
    expect(wrapper.isVisible()).toBe(true);
  });
});
