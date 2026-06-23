<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Input } from '@/shared/ui/input'
import { Button } from '@/shared/ui/button'
import { reactive } from 'vue'

const isLogin = defineModel({
  type: Boolean
})

const onFinish = () => {
  console.log(1)
}

const form = reactive({
  email: '',
  password: ''
})


</script>

<template>
  <div class="block">
    <div class="title">
      <Typography type="semibold-32-black">Вход для работодателя</Typography>
      <Typography type="regular-20-almost-black">123</Typography>
    </div>
    <a-form
      :model="form"
      name="login"
      layout="vertical"
      @finish="onFinish()"
    >
      <!-- Поле Email -->
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
          placeholder="user@example.ru"
          size="large"
        >
        </a-input>
      </a-form-item>

      <!-- Поле Пароль -->
      <a-form-item
        label="Пароль"
        name="password"
        :rules="[
          { required: true, message: 'Введите пароль' },
          { min: 6, message: 'Пароль должен содержать минимум 6 символов' }
        ]"
      >
        <a-input-password
          v-model:value="form.password"
          placeholder="Введите пароль"
          size="large"
        >
        </a-input-password>
      </a-form-item>
      <div class="button_block">
        <Button class="button">Войти</Button>
        <div class="text">
          <Typography type="regular-20-almost-black">Нет аккаунта? </Typography>
          <Button type="text-red" @click="isLogin = false">Зарегистрируйтесь</Button>
        </div>
      </div>
    </a-form>


  </div>
</template>

<style scoped>
.block{
  box-sizing: border-box;
  padding: 60px 50px;
  width: 100%;
  border: 2px solid var(--color-grey-light);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.title{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 0;
}
.button_block{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.button{
  width: 100%;
}
.text{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  //width: 100%;
}

</style>
