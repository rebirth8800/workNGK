<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import request from '../../api/requests.js'
import { onMounted } from 'vue'
import Typography from '@/shared/ui/typography/Typography.vue'
import Button from '@/shared/ui/button/Button.vue'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'


</script>

<template>
  <Header />
  <RouterView />
  <Footer/>
</template>

<style>
@import './styles/main.css';
.container{
  width: 1600px;
  margin: 0 auto;
}
</style>
