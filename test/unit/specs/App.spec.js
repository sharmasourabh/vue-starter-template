import Vue from 'vue';
import App from '../../../src/app.vue';

describe('App', () => {
  let Constructor;
  let vm;

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof App.data).toBe('function');
    const defaultData = App.data();
    expect(defaultData.showNav).toBe(false);
  });

  describe('Render', () => {
    beforeEach(() => {
      Constructor = Vue.extend(App);
      vm = new Constructor().$mount();
    });

    it('should show an error message if there are no results', () => {
      vm.noResults = true;
      return vm.$nextTick(() => {
        console.log(vm.$el.textContent);
        expect(!!vm.$el.textContent).toBe(false);
      });
    });
  });
});
