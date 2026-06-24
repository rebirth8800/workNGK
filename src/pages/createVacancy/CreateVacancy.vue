<script setup lang="ts">


import VacancyLayout from "@/app/layout/VacancyLayout.vue";

</script>

<template>
  <VacancyLayout>
   <div class="content">
     <TytleVacancy/>
     <FormVacancy/>
   </div>
  </VacancyLayout>
</template>

<style scoped>
.content{
  width: 66.85rem;
}
body{
  background-color: var(--color-background-grey);
}
</style>