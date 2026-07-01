import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Typography } from '../src/shared/ui/typography'

describe('Typography', () => {
  it('рендерит h1 для типа bold-64-black', () => {
    const wrapper = mount(Typography, {
      props: { type: 'bold-64-black' },
      slots: { default: 'Заголовок' }
    })
    expect(wrapper.element.tagName).toBe('H1')
    expect(wrapper.text()).toBe('Заголовок')
  })

  it('рендерит h1 для типа semibold-40-black', () => {
    const wrapper = mount(Typography, {
      props: { type: 'semibold-40-black' },
      slots: { default: 'Заголовок' }
    })
    expect(wrapper.element.tagName).toBe('H1')
  })

  it('рендерит h2 для типа semibold-36-black', () => {
    const wrapper = mount(Typography, {
      props: { type: 'semibold-36-black' }
    })
    expect(wrapper.element.tagName).toBe('H2')
  })

  it('рендерит h3 для типа semibold-32-black', () => {
    const wrapper = mount(Typography, {
      props: { type: 'semibold-32-black' }
    })
    expect(wrapper.element.tagName).toBe('H3')
  })

  it('рендерит h4 для типа semibold-24-black', () => {
    const wrapper = mount(Typography, {
      props: { type: 'semibold-24-black' }
    })
    expect(wrapper.element.tagName).toBe('H4')
  })

  it('рендерит p для типа regular-20-black', () => {
    const wrapper = mount(Typography, {
      props: { type: 'regular-20-black' }
    })
    expect(wrapper.element.tagName).toBe('P')
  })

  it('применяет правильный CSS-класс', () => {
    const wrapper = mount(Typography, {
      props: { type: 'bold-64-red' }
    })
    expect(wrapper.classes()).toContain('bold-64-red')
    expect(wrapper.classes()).toContain('typography')
  })

  it('использует тип regular-16-almost-black по умолчанию', () => {
    const wrapper = mount(Typography, {
      slots: { default: 'Текст' }
    })
    expect(wrapper.classes()).toContain('regular-16-almost-black')
  })
})