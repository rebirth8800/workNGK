import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Button } from '../src/shared/ui/button'

describe('Button', () => {
  it('отображает текст, переданный в слот', () => {
    const wrapper = mount(Button, {
      slots: { default: 'Нажать' }
    })
    expect(wrapper.text()).toBe('Нажать')
  })

  it('имеет класс default для типа по умолчанию', () => {
    const wrapper = mount(Button, {
      props: { type: 'default' }
    })
    expect(wrapper.classes()).toContain('default')
  })

  it('имеет класс none-back-red для соответствующего типа', () => {
    const wrapper = mount(Button, {
      props: { type: 'none-back-red' }
    })
    expect(wrapper.classes()).toContain('none-back-red')
  })

  it('имеет класс none-back-black для соответствующего типа', () => {
    const wrapper = mount(Button, {
      props: { type: 'none-back-black' }
    })
    expect(wrapper.classes()).toContain('none-back-black')
  })

  it('имеет класс text-red для соответствующего типа', () => {
    const wrapper = mount(Button, {
      props: { type: 'text-red' }
    })
    expect(wrapper.classes()).toContain('text-red')
  })

  it('имеет класс text-black для соответствующего типа', () => {
    const wrapper = mount(Button, {
      props: { type: 'text-black' }
    })
    expect(wrapper.classes()).toContain('text-black')
  })

  it('вызывает событие при клике', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Кнопка' }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})