<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { computed, reactive } from 'vue'
import { useAuthStore } from '@/entities/user'

const authStore = useAuthStore()

const login = authStore.useLogin()

const isLogin = defineModel({
  type: Boolean,
})

const onFinish = () => {
  login.mutate(form)
}

const form = reactive({
  email: 'admin@gmail.com',
  password: 'admin1',
})
</script>

<template>
  <div class="block">
    <div class="title">
      <Typography type="semibold-32-black">Вход для работодателя</Typography>
    </div>
    <a-form :model="form" name="login" layout="vertical" @finish="onFinish()" class="login-form">
      <a-form-item
          label="Email"
          name="email"
          :rules="[
          { required: true, message: 'Введите email' },
          { type: 'email', message: 'Введите корректный email' },
        ]"
      >
        <a-input v-model:value="form.email" placeholder="user@example.ru" class="custom-input" />
      </a-form-item>

      <a-form-item
          label="Пароль"
          name="password"
          :rules="[
          { required: true, message: 'Введите пароль' },
          { min: 6, message: 'Пароль должен содержать минимум 6 символов' },
        ]"
      >
        <a-input-password
            v-model:value="form.password"
            placeholder="Введите пароль"
            class="custom-input-password"
        />
      </a-form-item>

      <div class="button_block">
        <Button class="button">Войти</Button>
        <div class="text">
          <Typography type="regular-20-almost-black">Нет аккаунта?</Typography>
          <Button type="text-red" @click="isLogin = false">Зарегистрируйтесь</Button>
        </div>
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

.button_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ===== КНОПКА ВОЙТИ - ЦЕНТРИРУЕМ ТЕКСТ ===== */
.button {
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
}

/* Если внутри кнопки есть span или другие элементы - тоже центрируем */
.button :deep(*) {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  width: 100% !important;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.login-form {
  width: 100% !important;
}

:deep(.ant-form-item) {
  width: 100% !important;
  margin-bottom: 24px !important;
}

/* ===== ЛЕЙБЛ ===== */
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

/* ===== ОБЫЧНЫЙ ИНПУТ ===== */
:deep(.ant-input) {
  width: 100% !important;
  min-width: 100% !important;
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

/* ===== ИНПУТ С ПАРОЛЕМ (ОБЁРТКА) ===== */
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

/* ===== ВНУТРЕННИЙ ИНПУТ В ПАРОЛЕ ===== */
:deep(.custom-input-password .ant-input) {
  width: 100% !important;
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
  color: var(--color-black) !important;
  font-size: 1.125rem !important;
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

/* ===== ПЛЕЙСХОЛДЕР ===== */
:deep(.ant-input::placeholder) {
  color: var(--color-grey-light) !important;
  font-size: 1.125rem !important;
}

:deep(.custom-input-password .ant-input::placeholder) {
  color: var(--color-grey-light) !important;
  font-size: 1.125rem !important;
}

/* ===== ХОВЕР ===== */
:deep(.ant-input:hover),
:deep(.custom-input-password:hover) {
  border-color: var(--color-almost-black) !important;
}

/* ===== ФОКУС ===== */
:deep(.ant-input:focus),
:deep(.custom-input-password:focus-within) {
  border-color: var(--color-almost-black) !important;
  box-shadow: none !important;
}
</style>