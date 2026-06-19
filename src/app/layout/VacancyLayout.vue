<script setup lang="ts">
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { Typography } from '@/shared/ui/typography'


defineProps({
  name: String,

})
</script>

<template>
  <Header />
  <div class="container">
    <hr />
  </div>
  <main>
    <slot />
  </main>
  <div class="container" style="padding-top: 2rem;">
    <hr />
  </div>
  <Footer />
</template>

<style scoped>
main{
  padding-bottom: 1rem;
}

hr {
  border-top: 2px solid var(--color-grey-light);
}
</style>