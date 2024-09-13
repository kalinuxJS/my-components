import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Alert from '../lib/Basic.vue';

describe('Alert', () => {
  it('renders component', () => {
    const wrapper = mount(Alert);
    expect(wrapper.text()).toContain('弹出');
  });
});
