<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import BlockInfa from "@/shared/ui/blockInfa/BlockInfa.vue";
import IconInfo from '@/shared/svg/info.svg'
import { useAuthStore } from '@/entities/user'

const authStore = useAuthStore()

const login = authStore.useLogin()

const Login = ()=>{
  login.mutate({email: 'email6@gmail.com', password: 'password6', role: 'student'})
}
</script>

<template>
  <div class="block">
    <div class="title">
      <Typography type="semibold-32-black">Вход для студентов</Typography>
      <Typography type="regular-20-almost-black">Используйте учётные данные от системы Moodle</Typography>
    </div>
    <BlockInfa :svg="IconInfo" type="red">Для входа используется единая система авторизации Moodle. Отдельный пароль создавать не нужно</BlockInfa>
    <div class="button_block">
      <Button class="login-button" @click="Login()">Войти через Moodle</Button>
      <Typography type="regular-20-almost-black">Будет перенаправление на портал Moodle для авторизации</Typography>
    </div>
  </div>
</template>

<style scoped>
.block {
  box-sizing: border-box;
  padding: 60px 50px;
  width: 100%;
  border: 2px solid var(--color-grey-light);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.title {
  margin-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.button_block {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ===== КНОПКА НА ВСЮ ШИРИНУ С ЦЕНТРИРОВАННЫМ ТЕКСТОМ ===== */
.login-button {
  width: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
}

/* Если внутри кнопки есть span или другие элементы */
.login-button :deep(*) {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  width: 100% !important;
}
</style>