import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Tag } from '../src/shared/ui/tag'

describe('Tag', () => {
  it('отображает текст в слоте', () => {
    const wrapper = mount(Tag, {
      slots: { default: 'Опубликована' }
    })
    expect(wrapper.text()).toBe('Опубликована')
  })

  it('имеет класс grey по умолчанию', () => {
    const wrapper = mount(Tag, {
      props: { type: 'grey' }
    })
    expect(wrapper.classes()).toContain('grey')
  })

  it('имеет класс status-red для соответствующего типа', () => {
    const wrapper = mount(Tag, {
      props: { type: 'status-red' }
    })
    expect(wrapper.classes()).toContain('status-red')
  })

  it('имеет класс status-green для соответствующего типа', () => {
    const wrapper = mount(Tag, {
      props: { type: 'status-green' }
    })
    expect(wrapper.classes()).toContain('status-green')
  })

  it('имеет класс status-yellow для соответствующего типа', () => {
    const wrapper = mount(Tag, {
      props: { type: 'status-yellow' }
    })
    expect(wrapper.classes()).toContain('status-yellow')
  })
})