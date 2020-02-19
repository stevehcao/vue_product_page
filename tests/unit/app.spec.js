import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App);
  })

  it('renders with products-resource', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should change displayCarousel flag when the product image is clicked', () => {
    window.scrollTo = () => {};
    wrapper.find('.product-hero-img').trigger('click');
    expect(wrapper.vm.$data.displayCarousel).toBe(true);
  });

  it('should render carousel component when product image is clicked', async () => {
    window.scrollTo = () => {};
    wrapper.find('.product-hero-img').trigger('click');
    // next tick needed to wait for re-rendering
    await wrapper.vm.$nextTick();
    expect(wrapper.html().includes('module-overlay-container')).toBe(true);
  });
});
