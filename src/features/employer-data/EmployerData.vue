<script setup lang="ts">
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { useAuthStore } from '@/entities/user'
import { reactive, watch, ref } from 'vue'
import { mask } from 'vue-the-mask'

const vMask = mask

const authStore = useAuthStore()
const user = authStore.user
const updateData = authStore.useUpdateData()
const flag_form = ref(true)

const form = reactive({
  first_name: '',
  last_name: '',
  middle_name: '',
  phone: '',
  email: '',
  company_name: '',
  position: '',
})

watch(
    () => user,
    (newUser) => {
      if (newUser) {
        form.first_name = newUser.first_name || ''
        form.last_name = newUser.last_name || ''
        form.middle_name = newUser.middle_name || ''
        form.phone = newUser.phone || ''
        form.email = newUser.email || ''
        form.company_name = newUser.company_name || ''
        form.position = newUser.position || ''
      }
    },
    { immediate: true },
)

const onFinish = () => {
  flag_form.value = true
  updateData.mutate(form)
}
</script>

<template>
  <ProfileObertka>
    <a-form
        class="block"
        :model="form"
        name="basic"
        layout="vertical"
        @finish="onFinish"
    >
      <div class="header">
        <Typography type="semibold-32-black">Личные данные</Typography>
        <Button @click="flag_form = false" v-if="flag_form" html-type="button">Редактировать</Button>
        <Button html-type="submit" v-else>Сохранить изменения</Button>
      </div>

      <div class="form-grid">
        <!-- Левая колонка -->
        <div class="col">
          <a-form-item
              label="Фамилия"
              name="last_name"
              :rules="[{ required: true, message: 'Введите фамилию' }]"
          >
            <a-input
                v-model:value="form.last_name"
                :disabled="flag_form"
                placeholder="Иванов"
                class="custom-input"
            />
          </a-form-item>

          <a-form-item
              label="Название компании"
              name="company_name"
              :rules="[{ required: true, message: 'Введите название компании' }]"
          >
            <a-input
                v-model:value="form.company_name"
                :disabled="flag_form"
                placeholder="ООО «ТехноПро»"
                class="custom-input"
            />
          </a-form-item>

          <a-form-item
              label="Email"
              name="email"
              :rules="[
                { required: true, message: 'Введите email' },
                { type: 'email', message: 'Введите корректный email' },
              ]"
          >
            <a-input
                v-model:value="form.email"
                :disabled="flag_form"
                placeholder="example@mail.ru"
                class="custom-input"
            />
          </a-form-item>


        </div>

        <!-- Правая колонка -->
        <div class="col">
          <a-form-item
              label="Имя контактного лица"
              name="first_name"
              :rules="[{ required: true, message: 'Введите имя' }]"
          >
            <a-input
                v-model:value="form.first_name"
                :disabled="flag_form"
                placeholder="Иван"
                class="custom-input"
            />
          </a-form-item>

          <a-form-item
              label="Отчество"
              name="middle_name"
          >
            <a-input
                v-model:value="form.middle_name"
                :disabled="flag_form"
                placeholder="Иванович"
                class="custom-input"
            />
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
                :disabled="flag_form"
                v-model:value="form.phone"
                v-mask="'+7 (###) ###-##-##'"
                placeholder="+7 (999) 000-00-00"
                class="custom-input"
            />
          </a-form-item>
        </div>
      </div>
    </a-form>
  </ProfileObertka>
</template>

<style scoped>
.block {
  width: 100%;
  max-width: 100%;
  background-color: var(--color-white);
  border-radius: 10px;
  box-sizing: border-box;
  margin: 0 !important;
  padding: 0 16px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

/* ===== СЕТКА ===== */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 40px;
  width: 100%;
  box-sizing: border-box;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
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
  height: auto !important;
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
  transition: border-color 0.3s ease !important;
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

:deep(.custom-input:disabled) {
  background: var(--color-white) !important;
  color: var(--color-black) !important;
  cursor: default;
  opacity: 1;
}

/* ===== АДАПТИВ ===== */
@media (max-width: 768px) {
  .block {
    padding: 20px 16px;
  }
  .form-grid {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }
  .header {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>