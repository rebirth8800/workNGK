<script setup lang="ts">


import VacancyLayout from "@/app/layout/VacancyLayout.vue";
import TytleVacancy from "@/pages/createVacancy/ui/TytleVacancy.vue";
import FormVacancy from "@/pages/createVacancy/ui/FormVacancy.vue";
import {ProfileObertka} from "@/shared/ui/profileObertka";

</script>

<template>
  <VacancyLayout>
   <div class="background">
     <div class="content">
       <TytleVacancy/>
       <FormVacancy></FormVacancy>
     </div>
   </div>
  </VacancyLayout>
</template>

<style scoped>
.content{
  width: 66.85rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* margin-top: 40px; */

}
.background {
  width: 100%;
  background-color: var(--color-background-grey);
  padding: 60px 0;
}
</style>
