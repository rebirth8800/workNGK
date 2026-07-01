import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ProfileObertka } from '../src/shared/ui/profileObertka'

describe('ProfileObertka', () => {
  it('отображает содержимое в слоте', () => {
    const wrapper = mount(ProfileObertka, {
      slots: {
        default: '<div class="test-content">Содержимое</div>',
      },
    })
    expect(wrapper.find('.test-content').exists()).toBe(true)
    expect(wrapper.find('.test-content').text()).toBe('Содержимое')
  })

  it('имеет класс block', () => {
    const wrapper = mount(ProfileObertka)
    expect(wrapper.find('.block').exists()).toBe(true)
  })

  it('имеет класс content', () => {
    const wrapper = mount(ProfileObertka)
    expect(wrapper.find('.content').exists()).toBe(true)
  })
})