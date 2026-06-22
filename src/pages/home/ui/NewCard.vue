<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Button } from '@/shared/ui/button'
import Tag from '@/shared/ui/tag/Tag.vue'
import IconBox from '@/shared/ui/iconBox/IconBox.vue'
import { iconConfig } from '@/pages/home/config/icon-config.ts'

const props = defineProps({
  item: Object,
})
</script>

<template>
  <div class="card">
    <div class="flex">
      <div class="text_flex">
        <Typography type="semibold-32-black" class="card-title">{{ props.item.title }}</Typography>
        <Typography type="regular-20-almost-black">{{ props.item.company_name }}</Typography>
      </div>
      <component v-if="iconConfig" :is="iconConfig[props.item.svg]" />
      <IconBox type="grey" :svg="props.item.svg" />
    </div>
    <div class="tags_wrapper">
      <Tag type="grey">{{ props.item.city }}</Tag>
      <Tag type="grey">{{ props.item.employment }}</Tag>
    </div>
    <div class="line"></div>
    <div class="flex_bottom">
      <Typography type="semibold-32-black">от {{ props.item.salary_min }}$</Typography>
      <Button type="text-red" class="b">Подробнее</Button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 515px;
  height: 375px;
  min-width: 515px;
  min-height: 375px;
  padding: 35px 25px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 2px solid var(--color-grey-light);
  border-radius: 10px;
  box-sizing: border-box;
}
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-height: 3.6em;
  line-height: 1.4em;
  margin: 0;
  padding: 0;
}
.card-title :deep(*) {
  margin: 0;
  padding: 0;
  line-height: 1.4em;
}
.line {
  border: none;
  border-top: 1px solid var(--color-almost-black);
  width: 100%;
  margin: 0;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 0;
}
.flex_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-right: 0;
}
.b {
  margin-right: 0;
  padding-right: 0;
}
.text_flex {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.tags_wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 100%;
}
.tags_wrapper :deep(*) {
  margin: 0;
}
</style>