<script setup lang="ts">
import WelcomeBlock from './ui/WelcomeBlock.vue'
import HowToWork from './ui/HowToWork.vue'
import NewVacancy from './ui/NewVacancy.vue'
import BannerEmploy from './ui/BannerEmploy.vue'
import HomeLayout from '@/app/layout/HomeLayout.vue'
</script>

<template>
  <HomeLayout >
    <WelcomeBlock/>
    <HowToWork />
    <NewVacancy />
    <BannerEmploy />
  </HomeLayout>

</template>
<style>
main{
  display: flex;
  flex-direction: column;
  gap: 6rem;
}
</style>