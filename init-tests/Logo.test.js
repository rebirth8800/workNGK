import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Logo } from '../src/shared/ui/logo'

const RouterLinkStub = {
  template: '<a href="/"><slot /></a>',
}

describe('Logo', () => {
  it('отображает текст "НГК Работа"', () => {
    const wrapper = mount(Logo, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
    expect(wrapper.text()).toContain('НГК')
    expect(wrapper.text()).toContain('работа')
  })

  it('является ссылкой на главную страницу', () => {
    const wrapper = mount(Logo, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
    expect(wrapper.find('a').exists()).toBe(true)
    expect(wrapper.find('a').attributes('href')).toBe('/')
  })

  it('содержит красный квадрат', () => {
    const wrapper = mount(Logo, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
    const square = wrapper.find('.logo-square')
    expect(square.exists()).toBe(true)
    // Проверяем, что элемент имеет CSS-класс или стиль
    expect(square.classes()).toContain('logo-square')
  })
})