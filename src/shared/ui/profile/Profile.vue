<script setup lang="ts">
import {Typography} from "@/shared/ui/typography";
import IconProf from "@/shared/svg/people-white.svg";
</script>

<template>
  <div class="profile">
    <Typography type="medium-24-almost-black">Иван Иванович</Typography>
    <div class="profile-content">
      <IconProf />
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  gap: 20px;
  align-items: center;
}

.profile-content {
  width: 61px;
  height: 61px;
  border-radius: 100%;
  background-color: var(--color-primary-red);
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>