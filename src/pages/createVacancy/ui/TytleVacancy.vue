<script setup lang="ts">

import {Typography} from "@/shared/ui/typography";
</script>

<template>
  <div class="container">
    <Typography type="semibold-36-black">Добавление новой вакансии</Typography>
    <Typography type="medium-24-almost-black">Заполните форму. После проверки модератором вакансия появится на сайте</Typography>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>