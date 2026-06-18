<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import * as process from 'node:process'

const props = defineProps({
  item: Object
})
console.log(props.item)
</script>

<template>
  <div class="card">
    <div class="flex">
      <div class="text_flex">
        <Typography type="semibold-32-black">{{item.title}}</Typography>
        <Typography type="regular-20-almost-black">{{item.company_name}}</Typography>
      </div>
      <div class="square"></div>
    </div>
    <div class="text_flex">
      <Typography type="regular-20-almost-black">{{item.city}}</Typography>
      <Typography type="regular-20-almost-black">{{item.employment}}</Typography>
    </div>
    <hr>
    <div class="flex">
      <Typography type="semibold-32-black">от {{item.salary_min}}$</Typography>
      <Button type="text-red">Подробнее</Button>
    </div>
  </div>
</template>

<style scoped>

.square{
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 10px;
  margin: 0px;
}
.card{
  padding: 35px 25px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid var(--color-grey-light);
  border-radius: 10px;
}
hr{
  border: none;
}

.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 0;
}
.text_flex{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 0;
}
.line{
  border-bottom: 1px solid var(--color-almost-black);
}

</style>
