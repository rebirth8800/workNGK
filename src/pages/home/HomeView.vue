<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Header from '../../widgets/header/Header.vue'
import WelcomeBlock from './ui/WelcomeBlock.vue'
import HowToWork from './ui/HowToWork.vue'
import NewVacancy from './ui/NewVacancy.vue'
import BannerEmploy from './ui/BannerEmploy.vue'
</script>

<template>
  <main>
<!--    <Header />-->
    <WelcomeBlock/>
    <HowToWork />
    <NewVacancy />
    <BannerEmploy />
<!--    <Footer />-->
  </main>
</template>
<style scoped>
main{
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>