<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import {Tag} from "@/shared/ui/tag";
import {IconBox} from "@/shared/ui/iconBox";
import {Button} from "@/shared/ui/button";

defineProps({
  item: Object,
})
</script>

<template>
  <div class="card">
    <div class="tags">
<!--      не ругайся. пишу, чтобы ты видел пример как должно быть, поэтому вписала данные-->
      <Tag type="grey">5/2</Tag>
      <Tag type="grey">Удаленно</Tag>
      <Tag type="grey">Стажировка</Tag>
      <Tag type="grey">[+2]</Tag>
    </div>
    <div class="content">

     <div class="content">
       <div class="title">
         <div class="title-name">
           <Typography  type="semibold-32-black">{{item.title}}</Typography>
           <Typography  type="regular-20-black">{{item.company_name}}</Typography>
         </div>
         <div class="title-squre">
           <IconBox type="grey"></IconBox>
         </div>
       </div>
     </div>

      <Tag>Нижний Новгород</Tag>

      <div class="opisanie">
        <Typography type="regular-20-almost-black">Младший воспитатель помогает старшему в воспитание детей</Typography>
      </div>
    </div>
    <span class="line"></span>
    <div class="footer-content">
      <Typography type="semibold-32-black">от 25 000 ₽</Typography>
      <Button type="text-red" class="more-infa">Подробнее</Button>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 585px;
  max-height: 437px;
  padding: 35px 20px;
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
</style>