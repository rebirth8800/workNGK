<script setup lang="ts">
import { ProfileObertka } from '@/shared/ui/profileObertka'
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import { useQuery } from '@tanstack/vue-query'
import { getStudent } from '@/features/student-data/api/get-student.ts'

const props = defineProps({
  id: Number,
})

for(let i = 0; i < 20; i++) {
  if (i>10){
    co
  }
}

const { isPending, isError, data, error } = useQuery({
  queryKey: ['get-student'],
  queryFn: async () => {
    const response = await getStudent(props.id)

    console.log(response)
    return response.data
  },
})


</script>

<template>
  <ProfileObertka>
    <div class="block">
      <div class="title">
        <Typography type="semibold-32-black">Личные данные</Typography>
        <Button>Редактировать</Button>
      </div>
      форму надо написать (категорию не надо) и к каждому инпуту прикрутить v-model (они хранятся в data, например data.name)
    </div>
  </ProfileObertka>
</template>

<style scoped></style>
