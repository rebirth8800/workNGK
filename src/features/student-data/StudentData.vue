<script setup lang="ts">
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { useAuthStore } from '@/entities/user'
import { reactive, watch, ref } from 'vue'
import { mask } from 'vue-the-mask'

const vMask = mask


const authStore = useAuthStore()

const data  = authStore.user
const flag_form = ref(true)

const props = defineProps({
  id: Number,
})

// Форма с данными студента
const form = reactive({
  name: '',
  surname: '',
  patronymic: '',
  phone: '',
  email: '',
  course: '',
  birthDate: '',
  category: '',
})

// Обновляем форму при получении данных
watch(
  ()=>data,
  (newData) => {
    if (newData) {
      form.name = newData.first_name || ''
      form.surname = newData.last_name|| ''
      form.patronymic = newData.middle_name || ''
      form.phone = newData.phone || ''
      form.email = newData.email || ''
      form.course = newData.course || ''
      form.birthDate = newData.birthDate || ''
      form.category = newData.category || ''
    }
  },
  { immediate: true },
)

const onFinish = () => {
  console.log('Редактировать', form)
}
</script>

<template>
  <ProfileObertka>
    <a-form
      class="block"
      :model="form"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
    >
      <!-- Заголовок и кнопка -->
      <div class="header">
        <Typography type="semibold-32-black">Личные данные</Typography>
        <Button @click="flag_form = false" v-if="flag_form">Редактировать</Button>
        <Button @click="flag_form = false" html-type="sumbit" v-else>Сохранить изменения</Button>
      </div>

      <!-- Форма с двумя колонками -->
      <div class="form-grid">
        <!-- Левая колонка -->
        <div class="col">
          <!-- Имя -->
          <a-form-item
            label="Имя"
            name="name"
            :rules="[{ required: true, message: 'Введите имя' }]"
          >
            <a-input v-model:value="form.name" :disabled="flag_form" placeholder="Иван" class="custom-input" />
          </a-form-item>

          <!-- Отчество -->
          <a-form-item label="Отчество" name="patronymic">
            <a-input v-model:value="form.patronymic" :disabled="flag_form" placeholder="Иванович" class="custom-input" />
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
              :disabled="flag_form"
              v-model:value="form.phone"
              v-mask="'+7 (###) ###-##-##'"
              class="custom-input"
            />
          </a-form-item>

          <!-- Категория (заголовок и место для селекта) -->
          <a-form-item label="Категория" name="category">
            <a-select
              :disabled="flag_form"
              v-model:value="form.category"
              placeholder="Выберите категорию"
              class="custom-select"
              popupClassName="custom-select-dropdown"
            >
              <a-select-option value="it">IT и программирование</a-select-option>
              <a-select-option value="education">Педагогика и образование</a-select-option>
              <a-select-option value="economics">Экономика и бухгалтерия</a-select-option>
              <a-select-option value="logistics">Логистика и торговля</a-select-option>
              <a-select-option value="law">Юриспруденция</a-select-option>
              <a-select-option value="document">Документооборот и архив</a-select-option>
            </a-select>
          </a-form-item>
        </div>

        <!-- Правая колонка -->
        <div class="col">
          <!-- Фамилия -->
          <a-form-item
            label="Фамилия"
            name="surname"
            :rules="[{ required: true, message: 'Введите фамилию' }]"
          >
            <a-input v-model:value="form.surname" :disabled="flag_form" placeholder="Иванов" class="custom-input" />
          </a-form-item>

          <!-- Email -->
          <a-form-item
            label="Email"
            name="email"
            :rules="[
              { required: true, message: 'Введите email' },
              { type: 'email', message: 'Введите корректный email' },
            ]"
          >
            <a-input v-model:value="form.email" :disabled="flag_form" placeholder="ivanov@mail.ru" class="custom-input" />
          </a-form-item>

          <!-- Курс -->
          <a-form-item
            label="Курс"
            name="course"
            :rules="[{ required: true, message: 'Введите курс' }]"
          >
            <a-input v-model:value="form.course" :disabled="flag_form" placeholder="3" class="custom-input" />
          </a-form-item>

          <!-- Дата рождения -->
          <a-form-item
            label="Дата рождения"
            name="birthDate"
            :rules="[{ required: true, message: 'Введите дату рождения' }]"
          >
            <a-input v-model:value="form.birthDate" :disabled="flag_form" placeholder="01.01.2000" class="custom-input" />
          </a-form-item>
        </div>
      </div>
    </a-form>
  </ProfileObertka>
</template>

<style scoped>
.block {
  width: 100%;
  background-color: var(--color-white);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 !important;
}

/* Заголовок и кнопка в одной строке */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

/* Сетка с двумя колонками */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px 30px;
  width: 100%;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 25px;
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
@media (max-width: 768px) {
  .block {
    padding: 20px 16px;
  }
  .form-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .header {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
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