<script setup lang="ts">

import MainMenu from '@/features/main-menu/MainMenu.vue'
import ButtonBlock from '@/widgets/header/ui/ButtonBlock.vue'
import Logo from '@/shared/ui/logo/Logo.vue'
import Tag from "@/shared/ui/tag/Tag.vue";

</script>

<template >
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
  gap: 347px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-grey-light);
}
</style>