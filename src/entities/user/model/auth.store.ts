import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { postRegistrationEmployer, postRegistrationStudent } from '@/entities/user/api/post-registration.ts'
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router'
import { login } from '@/entities/user/api/post-login.ts'
import { getCheck } from '@/entities/user/api/get-check.ts'
import { putUserData } from '@/entities/user/api/put-user-data.ts'


export const useAuthStore = defineStore('auth', () => {

  const router = useRouter()

  // Состояние
  const user = ref(null)
  const isAuthenticated = ref(false)

  // ============ 📝 РЕГИСТРАЦИЯ (заявка) ============
  const useRegisterRequest = () => {
    return useMutation({
      mutationFn: async (data: any) => {
        const response = await postRegistrationEmployer(data)
        return response.data
      },
      onSuccess: (data)=>{
        if (data.success) {
          message.success({
            content: data.message,
            class: 'custom-message-large',
          })
          router.push({name: 'home'})
        } else{
          message.error(data.message)
        }
      },
      onError: (error) => {
        message.error('Неверная почта или пароль')
      }
    })
  }

  // ============ 🔑 ЛОГИН ============
  const useLogin = () => {
    return useMutation({
      mutationFn: async (data: any) => {
        const response = await login(data)
        return response.data
      },
      onSuccess: (data) => {
        if (data.success) {
          message.success({
            content: data.message,
            class: 'custom-message-large',
          })
          user.value = data.user
          isAuthenticated.value = true
          router.push({name: 'home'})
        }
      },
      onError: (error) => {
        console.log(error)
        message.error(error.message)
      }
    })
  }

  // ============ 👤 ПРОВЕРКА АВТОРИЗАЦИИ ============
  const useCheckAuth = () => {
    return useQuery({
      queryKey: ['auth', 'me'],
      queryFn: async () => {
        const response = await getCheck()
        return response.data
      },
      retry: false,
      staleTime: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      onSuccess: (data) => {
        if (data.success) {
          user.value = data.user
          isAuthenticated.value = true
        }
      },
      onError: () => {
        user.value = null
        isAuthenticated.value = false
      }
    })
  }

  const useUpdateData = () => {
    return useMutation({
      mutationFn: async (data: any) => {
        const response = await putUserData(data)
        return response.data
      },
      onSuccess: (data) => {
        if (data.success) {
          message.success({
            content: data.message,
            class: 'custom-message-large',
          })
          for (const key in data.data) {
            console.log(user.value[key])
            user.value[key] = data.data[key]
            console.log(user.value[key])

          }
          router.push({name: 'home'})
        }
      },
      onError: (error) => {
        console.log(error)
        message.error(error.message)
      }
    })
  }



  // ============ 🚪 ВЫХОД ============
  const useLogout = () => {
    return useMutation({
      mutationFn: async () => {
        const response = await api.post('/api/logout')
        return response.data
      },
      onSuccess: () => {
        user.value = null
        isAuthenticated.value = false
      }
    })
  }

  return {
    // Состояние
    user,
    isAuthenticated,


    // Только хуки!
    useRegisterRequest,
    useLogin,
    useUpdateData,
    useCheckAuth,
    useLogout
  }
})