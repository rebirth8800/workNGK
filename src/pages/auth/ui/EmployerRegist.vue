<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { reactive } from 'vue'
import { mask } from 'vue-the-mask'
import { Button } from '@/shared/ui/button'

const vMask = mask
const form = reactive({
  company: '',
  firstName: '',
  lastName: '',
  middleName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  agreement: false,
})

const onFinish = () => {
  console.log('onFinish')
}

const validateAgreement = (_rule: any, value: boolean) => {
  return new Promise((resolve, reject) => {
    if (!value) {
      reject(new Error('Необходимо принять условия'))
    } else {
      resolve(true)
    }
  })
}

const validateConfirmPassword = (_rule: any, value: string) => {
  return new Promise((resolve, reject) => {
    if (!value) {
      reject(new Error('Подтвердите пароль'))
    } else if (value !== form.password) {
      reject(new Error('Пароли не совпадают'))
    } else {
      resolve(true)
    }
  })
}
</script>

<template>
  <div class="block">
    <div class="title">
      <Typography type="semibold-32-black">Заявка на регистрацию</Typography>
      <Typography type="regular-20-almost-black">Заполните форму. Администратор проверит данные и активирует аккаунт.</Typography>
    </div>

    <a-form
        :model="form"
        name="register"
        layout="vertical"
        @finish="onFinish"
        class="register-form"
    >
      <!-- Название компании -->
      <a-form-item
          label="Название компании"
          name="company"
          :rules="[{ required: true, message: 'Введите название компании' }]"
      >
        <a-input
            v-model:value="form.company"
            placeholder='ООО "Пример"'
            class="custom-input"
        />
      </a-form-item>

      <!-- Имя контактного лица -->
      <a-form-item
          label="Имя контактного лица"
          name="firstName"
          :rules="[{ required: true, message: 'Введите имя' }]"
      >
        <a-input
            v-model:value="form.firstName"
            placeholder="Иван"
            class="custom-input"
        />
      </a-form-item>

      <!-- Фамилия -->
      <a-form-item
          label="Фамилия"
          name="lastName"
          :rules="[{ required: true, message: 'Введите фамилию' }]"
      >
        <a-input
            v-model:value="form.lastName"
            placeholder="Иванов"
            class="custom-input"
        />
      </a-form-item>

      <!-- Отчество -->
      <a-form-item
          label="Отчество"
          name="middleName"
          :rules="[{ required: true, message: 'Введите отчество' }]"
      >
        <a-input
            v-model:value="form.middleName"
            placeholder="Иванович"
            class="custom-input"
        />
      </a-form-item>

      <!-- Email -->
      <a-form-item
          label="Email"
          name="email"
          :rules="[
          { required: true, message: 'Введите email' },
          { type: 'email', message: 'Введите корректный email' }
        ]"
      >
        <a-input
            v-model:value="form.email"
            placeholder="ir@company.ru"
            class="custom-input"
        />
      </a-form-item>

      <!-- Телефон -->
      <a-form-item
          label="Телефон"
          name="phone"
          :rules="[
          { required: true, message: 'Введите номер телефона' },
          { pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, message: 'Введите номер в формате +7 (999) 000-00-00' }
        ]"
      >
        <a-input
            v-model:value="form.phone"
            v-mask="'+7 (###) ###-##-##'"
            placeholder="+7 (999) 000-00-00"
            class="custom-input"
        />
      </a-form-item>

      <!-- Пароль -->
      <a-form-item
          label="Пароль"
          name="password"
          :rules="[
          { required: true, message: 'Придумайте пароль' },
          { min: 8, message: 'Пароль должен содержать минимум 8 символов' },
          {
            pattern: /^(?=.*[A-Za-z])(?=.*\d)/,
            message: 'Пароль должен содержать буквы и цифры'
          }
        ]"
          tooltip="Пароль должен содержать минимум 8 символов, буквы и цифры"
      >
        <a-input-password
            v-model:value="form.password"
            placeholder="Придумайте пароль"
            class="custom-input-password"
        />
      </a-form-item>

      <!-- Подтверждение пароля -->
      <a-form-item
          label="Подтверждение пароля"
          name="confirmPassword"
          :rules="[
          { required: true, message: 'Подтвердите пароль' },
          { validator: validateConfirmPassword }
        ]"
      >
        <a-input-password
            v-model:value="form.confirmPassword"
            placeholder="Повторите пароль"
            class="custom-input-password"
        />
      </a-form-item>

      <!-- Чекбокс согласия -->
      <a-form-item
          name="agreement"
          :rules="[
          { validator: validateAgreement }
        ]"
      >
        <a-checkbox v-model:checked="form.agreement">
          Я принимаю условия
          <a href="#" class="link">Политики обработки персональных данных</a>
          и даю согласие на обработку моих персональных данных.
        </a-checkbox>
      </a-form-item>

      <!-- Кнопка отправки -->
      <a-form-item>
        <Button class="submit-button">Отправить заявку</Button>
      </a-form-item>

      <!-- Примечание после отправки -->
      <div class="note">
        <span>
          После отправки заявки дождитесь подтверждения администратора.
          Уведомление придет на email.
        </span>
      </div>
    </a-form>
  </div>
</template>

<style scoped>
.block {
  box-sizing: border-box;
  padding: 60px 50px;
  width: 100%;
  max-width: 100%;
  border: 2px solid var(--color-grey-light);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 0;
}

.register-form {
  width: 100% !important;
}

:deep(.ant-form-item) {
  width: 100% !important;
  margin-bottom: 24px !important;
}

:deep(.ant-form-item-label) {
  padding-bottom: 8px !important;
  display: block !important;
  width: 100% !important;
}

:deep(.ant-form-item-label > label) {
  font-weight: 500 !important;
  font-size: 1.25rem !important;
  color: var(--color-black) !important;
}

:deep(.ant-form-item-label > label .ant-form-item-required) {
  font-size: 1rem !important;
  color: var(--color-primary-red) !important;
}

:deep(.ant-form-item-control) {
  width: 100% !important;
  display: block !important;
}

:deep(.ant-form-item-control-input) {
  width: 100% !important;
  display: block !important;
}

:deep(.custom-input) {
  width: 100% !important;
  min-width: 100% !important;
  padding: 15px !important;
  border: 1px solid var(--color-grey-light) !important;
  border-radius: 10px !important;
  background: var(--color-white) !important;
  color: var(--color-black) !important;
  font-size: 1rem !important;
  height: auto !important;
  box-sizing: border-box !important;
  display: block !important;
}

:deep(.custom-input-password) {
  width: 100% !important;
  min-width: 100% !important;
  padding: 15px !important;
  border: 1px solid var(--color-grey-light) !important;
  border-radius: 10px !important;
  background: var(--color-white) !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
}

:deep(.custom-input-password .ant-input) {
  width: 100% !important;
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
  color: var(--color-black) !important;
  font-size: 1rem !important;
  height: auto !important;
  box-sizing: border-box !important;
  outline: none !important;
}

:deep(.custom-input-password .ant-input-suffix) {
  padding-right: 0 !important;
  padding-left: 0 !important;
  color: var(--color-grey-light) !important;
  margin-left: -8px !important;
  flex-shrink: 0 !important;
  position: relative !important;
  left: -4px !important;
}

:deep(.custom-input-password .ant-input-suffix:hover) {
  color: var(--color-black) !important;
}

:deep(.custom-input::placeholder) {
  color: var(--color-grey-light) !important;
  font-size: 1rem !important;
}

:deep(.custom-input-password .ant-input::placeholder) {
  color: var(--color-grey-light) !important;
  font-size: 1rem !important;
}

:deep(.custom-input:hover),
:deep(.custom-input-password:hover) {
  border-color: var(--color-almost-black) !important;
}

:deep(.custom-input:focus),
:deep(.custom-input-password:focus-within) {
  border-color: var(--color-almost-black) !important;
  box-shadow: none !important;
}

:deep(.ant-checkbox-checked .ant-checkbox-inner) {
  background-color: var(--color-primary-red) !important;
  border-color: var(--color-primary-red) !important;
}

:deep(.ant-checkbox-wrapper:hover .ant-checkbox-inner) {
  border-color: var(--color-almost-black) !important;
}

.link {
  color: var(--color-primary-red) !important;
  text-decoration: none !important;
}

.link:hover {
  color: var(--color-primary-red) !important;
  text-decoration: underline !important;
}

.note {
  margin-top: 16px;
  padding: 16px;
  background: var(--color-background-grey);
  border-radius: 10px;
  font-size: 0.9rem;
  color: var( --color-almost-black);
  text-align: center;
}

.submit-button {
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
}
</style>