<script setup lang="ts">
import { Button } from '@/shared/ui/button'
</script>

<template>
  <div class="main">
    <RouterLink to="/auth"><Button >Войти</Button></RouterLink>
  </div>

</template>

<style scoped>
.main{
  display: flex;
  margin-right: 0;
}
</style>