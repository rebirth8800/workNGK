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
  <div class="background">
    <div class="container">
      <Typography type="semibold-32-black">{{ name }}</Typography>
    </div>
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
.background {
  width: 100%;
  background-color: var(--color-background-grey);
}
.background .container {
  padding: 2.5rem 0;
}
hr {
  border-top: 2px solid var(--color-grey-light);
}
</style>