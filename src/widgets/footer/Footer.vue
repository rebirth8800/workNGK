<script setup lang="ts">
import LogoBlock from './ui/LogoBlock.vue';
import Contact from './ui/Contact.vue';
import Navig from './ui/Navig.vue';
</script>

<template>
  <footer class="container">
    <LogoBlock/>
    <div class="flex">
      <Navig/>
      <Contact/>
    </div>
  </footer>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding-top: 2.5rem;
  padding-bottom: 1.5rem;
  gap: 355px;
}
.flex{
  display: flex;
  margin: 0;
  justify-content: space-between;
  gap: 4rem;
}


</style>
