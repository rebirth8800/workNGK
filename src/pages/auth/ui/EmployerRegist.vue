<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { reactive, watch } from 'vue'
import { mask } from 'vue-the-mask'
import { Button } from '@/shared/ui/button'
import { useMutation } from '@tanstack/vue-query'
import { postRegister } from '@/pages/auth/api/post-register.ts'
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const vMask = mask
const form = reactive({
  company: 'aaa',
  firstName: 'aa',
  lastName: 'aa',
  middleName: 'aa',
  email: 'devipa999@gmaol.com',
  phone: '89999999999',
  password: 'fggregre123',
  confirmPassword: 'fggregre123',
  agreement: true,
})
const { isPending, isError, data, error, mutate, isSuccess } = useMutation({
  mutationFn: async (data) => {
    const response = await postRegister(data)
    return response.data
  },
})

const success = (massage) => {
  message.success(massage, 8)
  router.push({name: 'home'});
};

watch(isSuccess, (newIsSuccess) =>{
  if (newIsSuccess) {
    success(data.value.massage)
  }
})

const onFinish = () => {
  mutate({
    company: form.company,
    firstName: form.firstName,
    email: form.email,
    phone: form.phone,
    password: form.password,
    role: 'employer'
  })
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
      <Typography type="regular-20-almost-black"
        >Заполните форму. Администратор проверит данные и активирует аккаунт.</Typography
      >
    </div>

    <a-form :model="form" name="register" layout="vertical" @finish="onFinish">
      <!-- Название компании -->
      <a-form-item
        label="Название компании"
        name="company"
        :rules="[{ required: true, message: 'Введите название компании' }]"
      >
        <a-input v-model:value="form.company" placeholder='ООО "Пример"' size="large" />
      </a-form-item>

      <!-- Имя контактного лица -->
      <a-form-item
        label="Имя контактного лица"
        name="firstName"
        :rules="[{ required: true, message: 'Введите имя' }]"
      >
        <a-input v-model:value="form.firstName" placeholder="Иван" size="large" />
      </a-form-item>

      <!-- Фамилия -->
      <a-form-item
        label="Фамилия"
        name="lastName"
        :rules="[{ required: true, message: 'Введите фамилию' }]"
      >
        <a-input v-model:value="form.lastName" placeholder="Иванов" size="large" />
      </a-form-item>

      <!-- Отчество -->
      <a-form-item
        label="Отчество"
        name="middleName"
        :rules="[{ required: true, message: 'Введите отчество' }]"
      >
        <a-input v-model:value="form.middleName" placeholder="Иванович" size="large" />
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
        <a-input v-model:value="form.email" placeholder="ir@company.ru" size="large" />
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
          size="large"
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
            message: 'Пароль должен содержать буквы и цифры',
          },
        ]"
        tooltip="Пароль должен содержать минимум 8 символов, буквы и цифры"
      >
        <a-input-password
          v-model:value="form.password"
          placeholder="Придумайте пароль"
          size="large"
        />
      </a-form-item>

      <!-- Подтверждение пароля -->
      <a-form-item
        label="Подтверждение пароля"
        name="confirmPassword"
        :rules="[
          { required: true, message: 'Подтвердите пароль' },
          { validator: validateConfirmPassword },
        ]"
      >
        <a-input-password
          v-model:value="form.confirmPassword"
          placeholder="Повторите пароль"
          size="large"
        />
      </a-form-item>

      <!-- Чекбокс согласия -->
      <a-form-item name="agreement" :rules="[{ validator: validateAgreement }]">
        <a-checkbox v-model:checked="form.agreement">
          Я принимаю условия
          <a href="#" class="link">Политики обработки персональных данных</a>
          и даю согласие на обработку моих персональных данных.
        </a-checkbox>
      </a-form-item>

      <!-- Кнопка отправки -->
      <Button>Отправить заявку</Button>

      <!-- Примечание после отправки -->
      <div class="note">
        <span>
          После отправки заявки дождитесь подтверждения администратора. Уведомление придет на email.
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
</style>
