<script setup lang="ts">
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'



</script>

<template>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style scoped>

main{
  padding-bottom: 1rem;
}
</style>