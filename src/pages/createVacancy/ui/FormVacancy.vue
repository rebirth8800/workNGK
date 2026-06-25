<script setup lang="ts">
import { reactive } from 'vue'
import { Typography } from "@/shared/ui/typography"
import InputWithTags from "@/shared/ui/inputWithTag/InputWithTags.vue";
import {Button} from "@/shared/ui/button";
import Profile from "@/shared/ui/profile/Profile.vue";

const form = reactive({
  company: '',
  title: '',
  salary: '',
  city: '',
  workFormat: undefined,
  category: undefined,
  employment: undefined,
  schedule: undefined,
  address: '',
  email: '',
  phone: ''
})

const workFormatOptions = [
  { value: 'remote', label: 'Удалённо' },
  { value: 'office', label: 'Из офиса' },
  { value: 'hybrid', label: 'Гибрид' },
  { value: 'travel', label: 'Разъездной' }
]

const categoryOptions = [
  { value: 'it', label: 'IT и программирование' },
  { value: 'education', label: 'Педагогика и образование' },
  { value: 'economics', label: 'Экономика и бухгалтерия' },
  { value: 'logistics', label: 'Логистика и торговля' },
  { value: 'law', label: 'Юриспруденция' },
  { value: 'document', label: 'Документооборот и архив' }
]

const employmentOptions = [
  { value: 'full', label: 'Полная занятость' },
  { value: 'part', label: 'Частичная занятость' },
  { value: 'internship', label: 'Стажировка' },
  { value: 'project', label: 'Проектная работа / разовая' }
]

const scheduleOptions = [
  { value: '5-2', label: '5/2' },
  { value: '2-2', label: '2/2' },
  { value: 'free', label: 'Свободный' },
  { value: '6-1', label: '6/1' },
  { value: '1-1', label: '1/1' }
]

const handleTagsUpdate = (tags: string[]) => {
  console.log('Обновлённые теги:', tags)
}
</script>

<template>
  <div class="container" style="width: 100% !important; max-width: 100% !important; padding: 35px 35px; box-sizing: border-box !important; ">

    <!-- ===== ОСНОВНАЯ ИНФОРМАЦИЯ ===== -->
    <Typography type="semibold-32-black">Основная информация</Typography>

    <div style="width: 100% !important; max-width: 100% !important; display: flex; flex-direction: column; gap: 25px;">
      <!-- Название компании -->
      <a-form-item
          label="Название компании"
          name="company"
          :rules="[{ required: true, message: 'Введите название компании' }]"
          style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
      >
        <a-input
            v-model:value="form.company"
            placeholder="ООО Рога и Копыта"
            class="custom-input"
            style="width: 100% !important; max-width: 100% !important;"
        />
      </a-form-item>

      <!-- Название вакансии -->
      <a-form-item
          label="Название вакансии"
          name="title"
          :rules="[{ required: true, message: 'Введите название вакансии' }]"
          style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
      >
        <a-input
            v-model:value="form.title"
            placeholder="Frontend-разработчик"
            class="custom-input"
            style="width: 100% !important; max-width: 100% !important;"
        />
      </a-form-item>

      <!-- Зарплата -->
      <a-form-item
          label="Зарплата"
          name="salary"
          :rules="[{ required: true, message: 'Введите зарплату' }]"
          style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
      >
        <a-input
            v-model:value="form.salary"
            placeholder="от 100 000 ₽"
            class="custom-input"
            style="width: 100% !important; max-width: 100% !important;"
        />
      </a-form-item>
    </div>

    <!-- ===== ХАРАКТЕРИСТИКИ ===== -->
    <Typography type="semibold-32-black">Характеристики</Typography>

    <div class="specifications" style="width: 100% !important; max-width: 100% !important;">
      <!-- ЛЕВАЯ КОЛОНКА -->
      <div class="col" style="width: 100% !important; max-width: 100% !important;">
        <!-- Город -->
        <a-form-item
            label="Город"
            name="city"
            :rules="[{ required: true, message: 'Введите город' }]"
            style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
        >
          <a-input
              v-model:value="form.city"
              placeholder="Москва"
              class="custom-input"
              style="width: 100% !important; max-width: 100% !important;"
          />
        </a-form-item>

        <!-- Формат работы -->
        <a-form-item
            label="Формат работы"
            name="workFormat"
            :rules="[{ required: true, message: 'Выберите формат работы' }]"
            style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
        >
          <a-select
              v-model:value="form.workFormat"
              placeholder="Выберите формат работы"
              class="custom-select"
              popupClassName="custom-select-dropdown"
              style="width: 100% !important; max-width: 100% !important;"
          >
            <a-select-option
                v-for="option in workFormatOptions"
                :key="option.value"
                :value="option.value"
            >
              {{ option.label }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <!-- Категория -->
        <a-form-item
            label="Категория"
            name="category"
            :rules="[{ required: true, message: 'Выберите категорию' }]"
            style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
        >
          <a-select
              v-model:value="form.category"
              placeholder="Выберите категорию"
              class="custom-select"
              popupClassName="custom-select-dropdown"
              style="width: 100% !important; max-width: 100% !important;"
          >
            <a-select-option
                v-for="option in categoryOptions"
                :key="option.value"
                :value="option.value"
            >
              {{ option.label }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>

      <!-- ПРАВАЯ КОЛОНКА -->
      <div class="col" style="width: 100% !important; max-width: 100% !important;">
        <!-- Занятость -->
        <a-form-item
            label="Занятость"
            name="employment"
            :rules="[{ required: true, message: 'Выберите занятость' }]"
            style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
        >
          <a-select
              v-model:value="form.employment"
              placeholder="Выберите занятость"
              class="custom-select"
              popupClassName="custom-select-dropdown"
              style="width: 100% !important; max-width: 100% !important;"
          >
            <a-select-option
                v-for="option in employmentOptions"
                :key="option.value"
                :value="option.value"
            >
              {{ option.label }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <!-- График -->
        <a-form-item
            label="График"
            name="schedule"
            :rules="[{ required: true, message: 'Выберите график' }]"
            style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
        >
          <a-select
              v-model:value="form.schedule"
              placeholder="Выберите график"
              class="custom-select"
              popupClassName="custom-select-dropdown"
              style="width: 100% !important; max-width: 100% !important;"
          >
            <a-select-option
                v-for="option in scheduleOptions"
                :key="option.value"
                :value="option.value"
            >
              {{ option.label }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <!-- Фактический адрес -->
        <a-form-item
            label="Фактический адрес"
            name="address"
            :rules="[{ required: true, message: 'Введите адрес' }]"
            style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
        >
          <a-input
              v-model:value="form.address"
              placeholder="г. Москва, ул. Тверская, д. 1"
              class="custom-input"
              style="width: 100% !important; max-width: 100% !important;"
          />
        </a-form-item>
      </div>
    </div>

    <!-- ===== ЧТО ВЫ БУДЕТЕ ДЕЛАТЬ ===== -->
    <Typography type="semibold-32-black">Что вы будете делать</Typography>
    <InputWithTags
        placeholder="Введите навык..."
        buttonText="Добавить"
        :initialTags="['Vue.js', 'TypeScript']"
        @update:tags="handleTagsUpdate"
    />

    <!-- ===== МЫ ЖДЁМ ОТ ВАС ===== -->
    <Typography type="semibold-32-black">Мы ждём от вас</Typography>
    <InputWithTags
        placeholder="Введите навык..."
        buttonText="Добавить"
        :initialTags="['Vue.js', 'TypeScript']"
        @update:tags="handleTagsUpdate"
    />

    <!-- ===== УСЛОВИЯ РАБОТЫ ===== -->
    <Typography type="semibold-32-black">Условия работы</Typography>
    <InputWithTags
        placeholder="Введите навык..."
        buttonText="Добавить"
        :initialTags="['Vue.js', 'TypeScript']"
        @update:tags="handleTagsUpdate"
    />

    <!-- ===== КОНТАКТЫ ===== -->
    <Typography type="semibold-32-black">Контакты</Typography>

    <div style="width: 100% !important; max-width: 100% !important; display: flex; flex-direction: column; gap: 25px;">
      <!-- Email -->
      <a-form-item
          label="Email"
          name="email"
          :rules="[
            { required: true, message: 'Введите email' },
            { type: 'email', message: 'Введите корректный email' }
          ]"
          style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
      >
        <a-input
            v-model:value="form.email"
            placeholder="company@mail.ru"
            class="custom-input"
            style="width: 100% !important; max-width: 100% !important;"
        />
      </a-form-item>

      <!-- Телефон -->
      <a-form-item
          label="Телефон"
          name="phone"
          :rules="[
            { required: true, message: 'Введите номер телефона' },
            {
              pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
              message: 'Введите номер в формате +7 (999) 000-00-00'
            }
          ]"
          style="width: 100% !important; max-width: 100% !important; margin: 0 !important; padding: 0 !important;"
      >
        <a-input
            v-model:value="form.phone"
            placeholder="+7 (999) 000-00-00"
            class="custom-input"
            style="width: 100% !important; max-width: 100% !important;"
        />
      </a-form-item>
    </div>

    <Button type="default">Отправить на модерацию</Button>
  </div>
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
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  box-sizing: border-box !important;
}

/* ===== БЛОК ХАРАКТЕРИСТИКИ — GAP 30px ===== */
.specifications {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px !important;
  width: 100% !important;
  max-width: 100% !important;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 30px !important;
  width: 100% !important;
  max-width: 100% !important;
}

/* ===== ОБЩИЕ СТИЛИ ДЛЯ ИНПУТОВ И СЕЛЕКТОВ ===== */
:deep(.ant-form-item) {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  margin-bottom: 0 !important;
}

/* ===== ЛЕЙБЛ ===== */
:deep(.ant-form-item-label) {
  padding-bottom: 8px !important;
  display: block !important;
  width: 100% !important;
  text-align: left !important;
  margin: 0 !important;
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
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.ant-form-item-control-input) {
  width: 100% !important;
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

:deep(.ant-form-item-control-input-content) {
  width: 100% !important;
  max-width: 100% !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* ===== ИНПУТ ===== */
:deep(.custom-input) {
  width: 100% !important;
  min-width: 100% !important;
  max-width: 100% !important;
  padding: 15px !important;
  border: 1px solid var(--color-grey-light) !important;
  border-radius: 10px !important;
  background: var(--color-white) !important;
  color: var(--color-black) !important;
  font-size: 1.125rem !important;
  height: auto !important;
  box-sizing: border-box !important;
  display: block !important;
  margin: 0 !important;
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
  min-width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
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
  margin: 0 !important;
}

:deep(.custom-select .ant-select-selection-placeholder) {
  color: var(--color-grey-light) !important;
  font-size: 1.125rem !important;
  display: flex !important;
  align-items: center !important;
  text-align: left !important;
  margin: 0 !important;
  padding: 0 !important;
}

:deep(.custom-select .ant-select-selection-item) {
  font-size: 1.125rem !important;
  color: var(--color-black) !important;
  display: flex !important;
  align-items: center !important;
  text-align: left !important;
  margin: 0 !important;
  padding: 0 !important;
}

:deep(.custom-select .ant-select-arrow) {
  color: var(--color-grey-light) !important;
  font-size: 1.125rem !important;
  margin: 0 !important;
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

<!-- ===== ГЛОБАЛЬНЫЕ СТИЛИ ДЛЯ ВЫПАДАЮЩЕГО СПИСКА 20px ===== -->
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