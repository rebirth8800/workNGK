<script setup lang="ts">
import { reactive, watch } from 'vue'
import { Typography } from '@/shared/ui/typography'
import InputWithTags from '@/shared/ui/inputWithTag/InputWithTags.vue'
import { Button } from '@/shared/ui/button'
import { useQuery, useMutation } from '@tanstack/vue-query'
import { getFilters } from '@/shared/api/get-filters.ts'
import { mask } from 'vue-the-mask'
import { useAuthStore } from '@/entities/user'
import { postVacancy } from '@/pages/createVacancy/api/post-vacancy.ts'
import { message } from 'ant-design-vue'
import router from '@/app/router'

const vMask = mask

const authStore = useAuthStore()
const user = authStore.user

// Кастомные валидаторы
const validateCheckbox = (field: string[]) => {
  return (_rule: any, value: string[]) => {
    if (!value || value.length === 0) {
      return Promise.reject('Выберите хотя бы один вариант')
    }
    return Promise.resolve()
  }
}

const validateTags = (field: any[]) => {
  return (_rule: any, value: any[]) => {
    if (!value || value.length === 0) {
      return Promise.reject('Добавьте хотя бы один пункт')
    }
    return Promise.resolve()
  }
}

const form = reactive({
  company: '',
  title: '',
  salary: '',
  city: '',
  address: '',
  work_format: [] as string[],
  category: '',
  employment: [] as string[],
  schedule: [] as string[],
  email: '',
  phone: '',
  responsibilities: [] as string[],
  requirements: [] as string[],
  conditions: [] as string[],
})

watch(
    () => user,
    (newUser) => {
      if (newUser) {
        form.company = newUser?.company_name || ''
        form.email = newUser.email || ''
        form.phone = newUser.phone || ''
      }
    },
    { immediate: true },
)

const { isPending, isError, data, error } = useQuery({
  queryKey: ['filter'],
  queryFn: async () => {
    const response = await getFilters()
    return response.data
  },
})

const { mutate } = useMutation({
  mutationFn: async (formData) => {
    const response = await postVacancy(formData)
    return response.data
  },
  onSuccess: (data) => {
    message.success({
      content: data.message,
      class: 'custom-message-large',
    })
    router.push({ name: 'home' })
  },
})

const onFinish = () => {
  mutate(form)
}
</script>

<template>
  <a-form :model="form" class="container" name="createVacancy" layout="vertical" @finish="onFinish">
    <Typography type="semibold-32-black">Основная информация</Typography>

    <div class="form-group">
      <a-form-item
          label="Название компании"
          name="company"
          :rules="[{ required: true, message: 'Введите название компании' }]"
      >
        <a-input v-model:value="form.company" placeholder="ООО Рога и Копыта" class="custom-input" />
      </a-form-item>

      <a-form-item
          label="Название вакансии"
          name="title"
          :rules="[{ required: true, message: 'Введите название вакансии' }]"
      >
        <a-input v-model:value="form.title" placeholder="Frontend-разработчик" class="custom-input" />
      </a-form-item>

      <a-form-item
          label="Зарплата"
          name="salary"
          :rules="[{ required: true, message: 'Введите зарплату' }]"
      >
        <a-input v-model:value="form.salary" placeholder="от 100 000 ₽" class="custom-input" />
      </a-form-item>
    </div>

    <Typography type="semibold-32-black">Характеристики</Typography>

    <!-- ===== ТРИ КОЛОНКИ ===== -->
    <div class="specifications">
      <!-- Левая колонка -->
      <div class="col">
        <!-- Город -->
        <a-form-item
            label="Город"
            name="city"
            :rules="[{ required: true, message: 'Введите город' }]"
        >
          <a-input v-model:value="form.city" placeholder="Москва" class="custom-input" />
        </a-form-item>

        <!-- Горизонтальная линия -->
        <div class="divider-horizontal"></div>

        <!-- Формат работы -->
        <a-form-item
            name="work_format"
            :rules="[{ validator: validateCheckbox(form.work_format), trigger: 'change' }]"
        >
          <div class="checkbox-wrapper">
            <Typography type="semibold-24-black">Формат работы <span class="required-star">*</span></Typography>
            <div class="checkbox-grid">
              <div class="checkbox-item" v-for="option in data?.work_format" :key="option.value">
                <input
                    type="checkbox"
                    :id="'work_format-' + option.value"
                    :value="option.value"
                    v-model="form.work_format"
                />
                <label :for="'work_format-' + option.value">
                  <Typography type="regular-20-black">{{ option.name }}</Typography>
                </label>
              </div>
            </div>
          </div>
        </a-form-item>
      </div>

      <!-- Средняя колонка -->
      <div class="col">
        <!-- Адрес -->
        <a-form-item
            label="Фактический адрес"
            name="address"
            :rules="[{ required: true, message: 'Введите адрес' }]"
        >
          <a-input
              v-model:value="form.address"
              placeholder="г. Москва, ул. Тверская, д. 1"
              class="custom-input"
          />
        </a-form-item>

        <!-- Горизонтальная линия -->
        <div class="divider-horizontal"></div>

        <!-- Занятость -->
        <a-form-item
            name="employment"
            :rules="[{ validator: validateCheckbox(form.employment), trigger: 'change' }]"
        >
          <div class="checkbox-wrapper">
            <Typography type="semibold-24-black">Занятость <span class="required-star">*</span></Typography>
            <div class="checkbox-grid">
              <div class="checkbox-item" v-for="option in data?.employment" :key="option.value">
                <input
                    type="checkbox"
                    :id="'employment-' + option.value"
                    :value="option.value"
                    v-model="form.employment"
                />
                <label :for="'employment-' + option.value">
                  <Typography type="regular-20-black">{{ option.name }}</Typography>
                </label>
              </div>
            </div>
          </div>
        </a-form-item>
      </div>

      <!-- Правая колонка -->
      <div class="col">
        <!-- Категория -->
        <a-form-item
            label="Категория"
            name="category"
            :rules="[{ required: true, message: 'Выберите категорию' }]"
        >
          <a-select
              v-model:value="form.category"
              placeholder="Выберите категорию"
              class="custom-select"
          >
            <a-select-option v-for="option in data?.category" :key="option.value" :value="option.value">
              {{ option.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <!-- Горизонтальная линия -->
        <div class="divider-horizontal"></div>

        <!-- График -->
        <a-form-item
            name="schedule"
            :rules="[{ validator: validateCheckbox(form.schedule), trigger: 'change' }]"
        >
          <div class="checkbox-wrapper">
            <Typography type="semibold-24-black">График <span class="required-star">*</span></Typography>
            <div class="checkbox-grid">
              <div class="checkbox-item" v-for="option in data?.schedule" :key="option.value">
                <input
                    type="checkbox"
                    :id="'schedule-' + option.value"
                    :value="option.value"
                    v-model="form.schedule"
                />
                <label :for="'schedule-' + option.value">
                  <Typography type="regular-20-black">{{ option.name }}</Typography>
                </label>
              </div>
            </div>
          </div>
        </a-form-item>
      </div>
    </div>

    <Typography type="semibold-32-black">Что вы будете делать</Typography>
    <a-form-item
        name="responsibilities"
        :rules="[{ validator: validateTags(form.responsibilities), trigger: 'change' }]"
    >
      <InputWithTags
          v-model="form.responsibilities"
          placeholder="Укажите обязанности сотрудника"
      />
    </a-form-item>

    <Typography type="semibold-32-black">Мы ждём от вас</Typography>
    <a-form-item
        name="requirements"
        :rules="[{ validator: validateTags(form.requirements), trigger: 'change' }]"
    >
      <InputWithTags
          v-model="form.requirements"
          placeholder="Укажите ожидания от сотрудника (образование, навыки и тд)"
      />
    </a-form-item>

    <Typography type="semibold-32-black">Условия работы</Typography>
    <a-form-item
        name="conditions"
        :rules="[{ validator: validateTags(form.conditions), trigger: 'change' }]"
    >
      <InputWithTags
          v-model="form.conditions"
          placeholder="Укажите условия работы (занятость, бонусы, зарплата и тд)"
      />
    </a-form-item>

    <Typography type="semibold-32-black">Контакты</Typography>

    <div class="form-group">
      <a-form-item
          label="Email"
          name="email"
          :rules="[
          { required: true, message: 'Введите email' },
          { type: 'email', message: 'Введите корректный email' },
        ]"
      >
        <a-input v-model:value="form.email" placeholder="company@mail.ru" class="custom-input" />
      </a-form-item>

      <a-form-item
          label="Телефон"
          name="phone"
          :rules="[
          { required: true, message: 'Введите номер телефона' },
          {
            pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
            message: 'Введите номер в формате +7 (999) 000-00-00',
          },
        ]"
      >
        <a-input
            v-model:value="form.phone"
            v-mask="'+7 (###) ###-##-##'"
            placeholder="+7 (999) 000-00-00"
            class="custom-input"
        />
      </a-form-item>
    </div>

    <Button html-type="submit" class="submit-button">Отправить на модерацию</Button>
  </a-form>
</template>

<style scoped>
.container {
  background-color: var(--color-white);
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  padding: 35px 35px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  max-width: 100%;
  margin: 0;
  box-sizing: border-box;
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.submit-button {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  width: 100% !important;
}

.submit-button :deep(*) {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  width: 100% !important;
}

/* ===== ТРИ КОЛОНКИ ===== */
.specifications {
  display: flex;
  gap: 30px;
  width: 100%;
}

.col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ===== ГОРИЗОНТАЛЬНАЯ ЛИНИЯ ===== */
.divider-horizontal {
  width: 100%;
  height: 1px;
  background-color: #CBCACA;
  margin: 4px 0;
}

/* ===== ЧЕКБОКСЫ ===== */
.checkbox-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.checkbox-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.checkbox-item input[type="checkbox"] {
  width: 28px;
  height: 28px;
  accent-color: var(--color-primary-red);
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-item label {
  cursor: pointer;
  user-select: none;
}

.required-star {
  color: var(--color-primary-red);
  margin-left: 4px;
}

/* ===== СТИЛИ ДЛЯ FORM ITEMS ===== */
:deep(.ant-form-item) {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  margin-bottom: 0 !important;
}

:deep(.ant-form-item-label) {
  padding-bottom: 8px !important;
  display: block !important;
  width: 100% !important;
  text-align: left !important;
}

:deep(.ant-form-item-label > label) {
  font-weight: 500 !important;
  font-size: 1.25rem !important;
  color: var(--color-black) !important;
  text-align: left !important;
  display: inline-flex !important;
  justify-content: flex-start !important;
}

:deep(.ant-form-item-label > label .ant-form-item-required) {
  font-size: 1rem !important;
  color: var(--color-primary-red) !important;
}

:deep(.ant-form-item-control) {
  width: 100% !important;
}

:deep(.ant-form-item-control-input) {
  width: 100% !important;
}

:deep(.ant-form-item-control-input-content) {
  width: 100% !important;
}

/* ===== СТИЛИ ДЛЯ ИНПУТОВ ===== */
:deep(.custom-input) {
  width: 100% !important;
  padding: 15px !important;
  border: 1px solid var(--color-grey-light) !important;
  border-radius: 10px !important;
  background: var(--color-white) !important;
  color: var(--color-black) !important;
  font-size: 1.125rem !important;
  height: auto !important;
  box-sizing: border-box !important;
  display: block !important;
}

:deep(.custom-input::placeholder) {
  color: var(--color-grey-light) !important;
  font-size: 1.125rem !important;
}

:deep(.custom-input:hover) {
  border-color: var(--color-almost-black) !important;
}

:deep(.custom-input:focus) {
  border-color: var(--color-almost-black) !important;
  box-shadow: none !important;
}

/* ===== СТИЛИ ДЛЯ СЕЛЕКТА ===== */
:deep(.custom-select) {
  width: 100% !important;
}

:deep(.custom-select .ant-select-selector) {
  padding: 15px !important;
  border: 1px solid var(--color-grey-light) !important;
  border-radius: 10px !important;
  background: var(--color-white) !important;
  color: var(--color-black) !important;
  font-size: 1.125rem !important;
  height: auto !important;
  min-height: 54px !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  transition: border-color 0.3s !important;
}

:deep(.custom-select .ant-select-selection-placeholder) {
  color: var(--color-grey-light) !important;
  font-size: 1.125rem !important;
}

:deep(.custom-select .ant-select-selection-item) {
  font-size: 1.125rem !important;
  color: var(--color-black) !important;
}

:deep(.custom-select .ant-select-arrow) {
  color: var(--color-grey-light) !important;
  font-size: 1.125rem !important;
}

:deep(.custom-select .ant-select-selector:hover) {
  border-color: var(--color-almost-black) !important;
}

:deep(.custom-select.ant-select-focused .ant-select-selector) {
  border-color: var(--color-almost-black) !important;
  box-shadow: none !important;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 1024px) {
  .specifications {
    flex-wrap: wrap;
  }
  .col {
    flex: 1 1 45%;
  }
}

@media (max-width: 768px) {
  .specifications {
    flex-direction: column;
  }
  .col {
    flex: 1 1 100%;
  }
}
</style>