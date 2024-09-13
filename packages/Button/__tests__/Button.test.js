import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../lib/Basic.vue';

describe('Button', () => {
  it('renders component', () => {
    const wrapper = mount(Button);
    expect(wrapper.text()).toContain('按钮');
  });
});
