<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Tag } from '@/shared/ui/tag'
import { IconBox } from '@/shared/ui/iconBox'
import { Button } from '@/shared/ui/button'
import IconAdress from '@/shared/svg/adress-tag.svg'
import IconTime from "@/shared/svg/time-forward.svg";
import { iconConfig } from '@/shared/config'

defineProps({
  item: Object,
})


const date = (date)=>{
  return date.split('-').reverse().join('.')
}
</script>
<template>
  <div class="card">
    <div class="tags">
      <Tag type="grey">{{ item.schedule[0] }}</Tag>
      <Tag type="grey" v-if="item.schedule[1]">{{ item.schedule[1] }}</Tag>
      <Tag type="grey">{{ item.work_format[0] }}</Tag>
      <Tag type="grey" v-if="(item.schedule.length + item.employment.length + item.work_format.length - 3) >0 ">[+{{ item.schedule.length + item.employment.length + item.work_format.length - 3 }}]</Tag>
    </div>
    <div class="content">
      <div class="content">
        <div class="title">
          <div class="title-name">
            <Typography class="title-text" type="semibold-32-black">{{ item.title }}</Typography>
            <Typography class="company-text" type="regular-20-black">{{ item.company_name }}</Typography>
          </div>

          <div class="title-squre">
            <IconBox type="grey" :svg="iconConfig[item.svg]" />

          </div>
        </div>
      </div>

      <Tag :svg="IconAdress"> {{ item.city }}</Tag>
      <Tag :svg="IconTime"> {{ item.employment[0] }}</Tag>

      <Typography type="regular-16-almost-black">Опубликована: {{date(item.date)}}</Typography>


    </div>
    <span class="line"></span>
    <div class="footer-content">
      <Typography type="semibold-32-black">от {{ item.salary }} ₽</Typography>
      <RouterLink :to="`/vacancies/${item.id}`"><Button type="text-red" class="more-infa" >Подробнее</Button></RouterLink>
    </div>
  </div>
</template>

<style scoped>
a{
  margin-right: 0;
}
.card {
  max-width: 550px;
  min-width: 535px;
  max-height: 437px;
  padding: 30px 20px;
  border: 1px solid var(--color-grey-light);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.tags {
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 0;
}

.tags > * {
  margin: 0;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;
}

.title-name {
  max-width: 362px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  margin: 0;
}

.title-squre {
  padding: 0;
  margin: 0;
  margin-left: auto;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0;
  margin: 0;
  width: 100%;
}

.line {
  width: 100%;
  height: 1px;
  background-color: var(--color-almost-black);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
}

.more-infa {
  padding: 0;
  margin: 0;
  margin-left: auto;
}

.title-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}

.company-text {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
}
</style>