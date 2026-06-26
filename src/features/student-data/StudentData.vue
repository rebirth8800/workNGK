<script setup lang="ts">
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { useQuery } from '@tanstack/vue-query'
import { getStudent } from '@/features/student-data/api/get-student.ts'
import { ref, watch } from 'vue'

interface Props {
  id?: number
}

const props = withDefaults(defineProps<Props>(), {
  id: 0,
})

const { isPending, isError, data, error } = useQuery({
  queryKey: ['get-student', props.id],
  queryFn: async () => {
    const response = await getStudent(props.id)
    console.log(response)
    return response.data
  },
  enabled: () => !!props.id,
})

// Форма для редактирования
const isEditing = ref(false)
const formData = ref({
  name: '',
  email: '',
  phone: '',
  // Добавьте другие поля в зависимости от структуры data
})

// При получении данных заполняем форму
watch(data, (newData) => {
  if (newData) {
    formData.value = {
      name: newData.name || '',
      email: newData.email || '',
      phone: newData.phone || '',
      // ... другие поля
    }
  }
}, { immediate: true })

const toggleEdit = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value && data.value) {
    // При отмене редактирования возвращаем исходные данные
    formData.value = {
      name: data.value.name || '',
      email: data.value.email || '',
      phone: data.value.phone || '',
    }
  }
}

const saveData = () => {
  // Здесь логика сохранения данных
  console.log('Сохранение данных:', formData.value)
  isEditing.value = false
}
</script>

<template>
  <ProfileObertka>
    <div class="block">
      <div class="title">
        <Typography type="semibold-32-black">Личные данные</Typography>
        <Button @click="toggleEdit">
          {{ isEditing ? 'Отмена' : 'Редактировать' }}
        </Button>
      </div>

      <!-- Состояние загрузки -->
      <div v-if="isPending" class="loading">
        <Typography type="regular-20-almost-black">Загрузка данных...</Typography>
      </div>

      <!-- Состояние ошибки -->
      <div v-else-if="isError" class="error">
        <Typography type="regular-20-primary-red">Ошибка загрузки: {{ error?.message }}</Typography>
      </div>

      <!-- Форма -->
      <div v-else-if="data" class="form-container">
        <div v-if="isEditing" class="form">
          <div class="form-group">
            <Typography type="regular-16-almost-black">Имя</Typography>
            <input v-model="formData.name" class="input" placeholder="Введите имя" />
          </div>
          <div class="form-group">
            <Typography type="regular-16-almost-black">Email</Typography>
            <input v-model="formData.email" class="input" placeholder="Введите email" />
          </div>
          <div class="form-group">
            <Typography type="regular-16-almost-black">Телефон</Typography>
            <input v-model="formData.phone" class="input" placeholder="Введите телефон" />
          </div>
          <!-- Добавьте другие поля -->

          <Button @click="saveData" class="save-btn">Сохранить</Button>
        </div>

        <!-- Отображение данных -->
        <div v-else class="data-display">
          <div class="data-item">
            <Typography type="regular-16-almost-black" class="label">Имя</Typography>
            <Typography type="semibold-20-black">{{ data.name || 'Не указано' }}</Typography>
          </div>
          <div class="data-item">
            <Typography type="regular-16-almost-black" class="label">Email</Typography>
            <Typography type="semibold-20-black">{{ data.email || 'Не указано' }}</Typography>
          </div>
          <div class="data-item">
            <Typography type="regular-16-almost-black" class="label">Телефон</Typography>
            <Typography type="semibold-20-black">{{ data.phone || 'Не указано' }}</Typography>
          </div>
          <!-- Добавьте другие поля -->
        </div>
      </div>
    </div>
  </ProfileObertka>
</template>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.loading,
.error {
  padding: 20px;
  text-align: center;
}

.form-container {
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  background: var(--color-white);
  transition: border-color 0.2s ease;
  box-sizing: border-box;
  outline: none;
  font-size: 1rem;
  color: var(--color-black);
}

.input:focus {
  border-color: var(--color-primary-red);
}

.save-btn {
  align-self: flex-start;
  margin-top: 10px;
}

.data-display {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
}

.data-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-grey-light);
}

.data-item:last-child {
  border-bottom: none;
}

.label {
  color: var(--color-grey);
}

@media (max-width: 768px) {
  .title {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .form,
  .data-display {
    max-width: 100%;
  }
}
</style>