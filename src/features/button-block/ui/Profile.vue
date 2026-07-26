<script setup lang="ts">
import {Typography} from "@/shared/ui/typography";
import IconProf from "@/shared/svg/people-white.svg";

defineProps({
  lastname: String,
  name: String,
})
</script>

<template>
  <div class="profile">
    <Typography type="medium-20-almost-black">{{name}} {{lastname}}</Typography>
    <RouterLink to="/profile" class="profile-content">
      <IconProf />
    </RouterLink>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-shrink: 0;
}

.profile-content {
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: var(--color-primary-red);
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>