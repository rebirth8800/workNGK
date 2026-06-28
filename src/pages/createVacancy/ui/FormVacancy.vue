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

const form = reactive({
  company: '',
  title: '',
  salary: '',
  city: '',
  work_format: '',
  category: '',
  employment: '',
  schedule: '',
  address: '',
  email: '',
  phone: '',
  responsibilities: [],
  requirements: [],
  conditions: [],
  status: user?.role == 'admin' ? 'Опубликована' : 'На модерации',
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
  mutationFn: async (form) => {
    const response = await postVacancy(form)
    return response.data
  },
  onSuccess: (data) => {
    message.success({
      content: data.message,
      class: 'custom-message-large',
    })
    router.push({name: 'home'})
  }
})




const onFinish = () => {
  mutate(form)
}
</script>

<template>
  <a-form :model="form" class="container" name="createVacancy" layout="vertical" @finish="onFinish">
    <!-- ===== ОСНОВНАЯ ИНФОРМАЦИЯ ===== -->
    <Typography type="semibold-32-black">Основная информация</Typography>

    <div class="form-group">
      <!-- Название компании -->
      <a-form-item
        label="Название компании"
        name="company"
        :rules="[{ required: true, message: 'Введите название компании' }]"
      >
        <a-input
          v-model:value="form.company"
          placeholder="ООО Рога и Копыта"
          class="custom-input"
        />
      </a-form-item>

      <!-- Название вакансии -->
      <a-form-item
        label="Название вакансии"
        name="title"
        :rules="[{ required: true, message: 'Введите название вакансии' }]"
      >
        <a-input
          v-model:value="form.title"
          placeholder="Frontend-разработчик"
          class="custom-input"
        />
      </a-form-item>

      <!-- Зарплата -->
      <a-form-item
        label="Зарплата"
        name="salary"
        :rules="[{ required: true, message: 'Введите зарплату' }]"
      >
        <a-input v-model:value="form.salary" placeholder="от 100 000 ₽" class="custom-input" />
      </a-form-item>
    </div>

    <!-- ===== ХАРАКТЕРИСТИКИ ===== -->
    <Typography type="semibold-32-black">Характеристики</Typography>

    <div class="specifications">
      <!-- ЛЕВАЯ КОЛОНКА -->
      <div class="col">
        <!-- Город -->
        <a-form-item
          label="Город"
          name="city"
          :rules="[{ required: true, message: 'Введите город' }]"
        >
          <a-input v-model:value="form.city" placeholder="Москва" class="custom-input" />
        </a-form-item>

        <!-- Формат работы -->
        <a-form-item
          label="Формат работы"
          name="workFormat"
          :rules="[{ required: false, message: 'Выберите формат работы' }]"
        >
          <a-select
            v-model:value="form.work_format"
            placeholder="Выберите формат работы"
            class="custom-select"
            popupClassName="custom-select-dropdown"
          >
            <a-select-option
              v-for="option in data?.work_format"
              :key="option.value"
              :value="option?.value"
            >
              {{ option.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

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
            popupClassName="custom-select-dropdown"
          >
            <a-select-option
              v-for="option in data?.category"
              :key="option.value"
              :value="option.value"
            >
              {{ option.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>

      <!-- ПРАВАЯ КОЛОНКА -->
      <div class="col">
        <!-- Занятость -->
        <a-form-item
          label="Занятость"
          name="employment"
          :rules="[{ required: true, message: 'Выберите занятость' }]"
        >
          <a-select
            v-model:value="form.employment"
            placeholder="Выберите занятость"
            class="custom-select"
            popupClassName="custom-select-dropdown"
          >
            <a-select-option
              v-for="option in data?.employment"
              :key="option.value"
              :value="option.value"
            >
              {{ option.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <!-- График -->
        <a-form-item
          label="График"
          name="schedule"
          :rules="[{ required: true, message: 'Выберите график' }]"
        >
          <a-select
            v-model:value="form.schedule"
            placeholder="Выберите график"
            class="custom-select"
            popupClassName="custom-select-dropdown"
          >
            <a-select-option
              v-for="option in data?.schedule"
              :key="option.value"
              :value="option.value"
            >
              {{ option.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <!-- Фактический адрес -->
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
      </div>
    </div>

    <!-- ===== ЧТО ВЫ БУДЕТЕ ДЕЛАТЬ ===== -->
    <Typography type="semibold-32-black">Что вы будете делать</Typography>
    <InputWithTags v-model="form.responsibilities" placeholder="Укажите обязанности сотрудника" />

    <!-- ===== МЫ ЖДЁМ ОТ ВАС ===== -->
    <Typography type="semibold-32-black">Мы ждём от вас</Typography>
    <InputWithTags v-model="form.requirements" placeholder="Укажите ожидания от сотрудника (образование, навыки и тд)" />

    <!-- ===== УСЛОВИЯ РАБОТЫ ===== -->
    <Typography type="semibold-32-black">Условия работы</Typography>
    <InputWithTags v-model="form.conditions" placeholder="Укажите условия работы (занятость, бонусы, зарплата и тд)" />

    <!-- ===== КОНТАКТЫ ===== -->
    <Typography type="semibold-32-black">Контакты</Typography>

    <div class="form-group">
      <!-- Email -->
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

      <!-- Телефон -->
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

/* ===== КНОПКА ОТПРАВКИ - ЦЕНТРИРУЕМ ===== */
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

/* ===== БЛОК ХАРАКТЕРИСТИКИ ===== */
.specifications {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
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

/* ===== ИНПУТ ===== */
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

/* ===== СЕЛЕКТ ===== */
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
@media (max-width: 768px) {
  .container {
    padding: 20px 16px;
  }
  .specifications {
    grid-template-columns: 1fr;
    gap: 20px !important;
  }
}
</style>

<!-- ===== ГЛОБАЛЬНЫЕ СТИЛИ ДЛЯ ВЫПАДАЮЩЕГО СПИСКА ===== -->
<style>
.custom-select-dropdown .ant-select-item {
  font-size: 20px !important;
  padding: 14px 20px !important;
  min-height: 56px !important;
  line-height: 1.5 !important;
}

.custom-select-dropdown .ant-select-item-option-content {
  font-size: 20px !important;
}
</style>