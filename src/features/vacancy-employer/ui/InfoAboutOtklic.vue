<script setup lang="ts">
import IconLampa from '@/shared/svg/lampa.svg'
import {Typography} from "@/shared/ui/typography";

</script>

<template>
<div class="container">
  <IconLampa/>
  <Typography type="regular-20-almost-black">Об откликах на вакансии вы узнаете по email. Проверяйте почту, указанную при регистрации.</Typography>
</div>
</template>

<style scoped>
.container{
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
  padding: 35px 35px;
  border-radius: 10px;
  border: 1px solid #BBB9B9;
  margin-top: 35px;
  min-width: 1600px;
}
</style>