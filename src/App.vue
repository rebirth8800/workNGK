<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import request from '../api/requests.js'
import {onMounted} from "vue";
import Typography from '@/shared/ui/typography/Typography.vue'
import Button from '@/shared/ui/button/Button.vue'

const loadVacancies = async () => {
  const response = await request.getNewVacation() // можно сразу вытаскивать дату или просто писать responce и потом из него вытаскивать дату
  console.log(response)
}
onMounted(() => {
  loadVacancies()
})


</script>

<template>
  <header>
    <Typography size="hero" color="black" weight="regular">Помогаем студентам НГК найти работу</Typography>
    <Button ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.542 17.0679L23.2922 22.625M10.5417 4.75C13.6712 4.75 16.2083 7.21243 16.2083 10.25M20.4583 10.25C20.4583 4.93426 16.0185 0.625 10.5417 0.625C5.06485 0.625 0.625 4.93426 0.625 10.25C0.625 15.5657 5.06485 19.875 10.5417 19.875C16.0185 19.875 20.4583 15.5657 20.4583 10.25Z" stroke="white" stroke-width="1.25" stroke-linecap="round"/>
    </svg>
      Хомяк красивый</Button>
    <Typography size="hero">ghbb</Typography>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
