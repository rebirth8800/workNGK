<script setup lang="ts">
import { Typography } from '@/shared/ui/typography'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
</script>

<template>
  <Header/>
  <div class="container">
    <hr />
  </div>
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style scoped>
hr {
  border-top: 2px solid var(--color-grey-light);
}
main{
  padding-bottom: 1rem;
}
</style>
