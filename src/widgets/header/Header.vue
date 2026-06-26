<script setup lang="ts">
import { MainMenu } from '@/features/main-menu'
import ButtonBlock from '@/features/button-block/ButtonBlock.vue'
import { Logo } from '@/shared/ui/logo'
import Tag from '@/shared/ui/tag/Tag.vue'
</script>

<template>
  <div class="container">
    <Logo />
    <MainMenu />
    <ButtonBlock />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>