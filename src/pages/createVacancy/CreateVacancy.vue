<script setup lang="ts">
import VacancyLayout from "@/app/layout/VacancyLayout.vue"
import TytleVacancy from "@/pages/createVacancy/ui/TytleVacancy.vue"
import FormVacancy from "@/pages/createVacancy/ui/FormVacancy.vue"
import { ProfileObertka } from "@/shared/ui/profileObertka"
import CreateVacancyLayout from "@/app/layout/CreateVacancyLayout.vue";
</script>

<template>
  <CreateVacancyLayout>
    <div class="background">
      <div class="content-wrapper">
        <div class="content">
          <TytleVacancy />
          <FormVacancy />
        </div>
      </div>
    </div>
  </CreateVacancyLayout>
</template>

<style scoped>
.background {
  width: 100%;
  background-color: var(--color-background-grey);
  padding: 60px 0;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  max-width: 66.85rem;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.content {
  width: 100%;
  max-width: 66.85rem;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0;
}
</style>