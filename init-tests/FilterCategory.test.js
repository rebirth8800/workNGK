import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FilterCategory from '../src/pages/vacancy/ui/Category.vue'

describe('FilterCategory', () => {
  it('отображает заголовок "Категория"', () => {
    const wrapper = mount(FilterCategory, {
      props: {
        item: [
          { value: 'it', name: 'IT' },
          { value: 'pedagogy', name: 'Педагогика' },
        ],
        modelValue: '',
      },
    })
    expect(wrapper.text()).toContain('Категория')
  })

  it('отображает список категорий при клике на кнопку', async () => {
    const wrapper = mount(FilterCategory, {
      props: {
        item: [
          { value: 'it', name: 'IT' },
          { value: 'pedagogy', name: 'Педагогика' },
        ],
        modelValue: '',
      },
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.text()).toContain('IT')
    expect(wrapper.text()).toContain('Педагогика')
  })

  it('выбирает категорию при клике', async () => {
    const wrapper = mount(FilterCategory, {
      props: {
        item: [
          { value: 'it', name: 'IT' },
          { value: 'pedagogy', name: 'Педагогика' },
        ],
        modelValue: '',
      },
    })

    const button = wrapper.find('button')
    await button.trigger('click')

    const option = wrapper.findAll('.radio')[0]
    await option.trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['it'])
  })
})