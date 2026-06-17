<script setup>
defineProps({
  size: {
    type: String,
    default: 'body',
  },
  weight: {
    type: String,
    default: 'regular',
  },
  color: {
    type: String,
    default: 'black',
  },
})
</script>

<template>
  <component
    :is="size === 'hero' || size === 'h1' ? 'h1' : size === 'h2' ? 'h2' : size === 'h3' ? 'h3' : size === 'title' ? 'h4' : size === 'body' ? 'p' : 'span'"
    :class="[size, weight, color]"
  >
    <slot />
  </component>
</template>

<style scoped>
.hero, .h1, .h2, .h3, .title, .body, .small {
  font-family: 'Inter', sans-serif;
  margin: 0;
  line-height: 1.2;
}

/* ===== Компьютер (1920px и больше) ===== */
.hero { font-size: 64px; }
.h1 { font-size: 40px; }
.h2 { font-size: 36px; }
.h3 { font-size: 32px; }
.title { font-size: 24px; }
.body { font-size: 20px; }
.small { font-size: 16px; }

/* ===== Ноутбук (1440px и меньше) ===== */
@media (max-width: 1920px) {
  .hero { font-size: 54px; }
  .h1 { font-size: 36px; }
  .h2 { font-size: 32px; }
  .h3 { font-size: 28px; }
  .title { font-size: 22px; }
  .body { font-size: 18px; }
  .small { font-size: 15px; }
}

/* ===== Планшет (768px и меньше) ===== */
@media (max-width: 1440px) {
  .hero { font-size: 32px; }
  .h1 { font-size: 28px; }
  .h2 { font-size: 24px; }
  .h3 { font-size: 22px; }
  .title { font-size: 20px; }
  .body { font-size: 16px; }
  .small { font-size: 14px; }
}

/* ===== Телефон (360px и меньше) ===== */
@media (max-width: 768px) {
  .hero { font-size: 28px; }
  .h1 { font-size: 24px; }
  .h2 { font-size: 20px; }
  .h3 { font-size: 18px; }
  .title { font-size: 18px; }
  .body { font-size: 15px; }
  .small { font-size: 13px; }
}

/* ===== Начертания ===== */
.regular { font-weight: 400; }
.medium { font-weight: 500; }
.semibold { font-weight: 600; }
.bold { font-weight: 700; }

/* ===== Цвета ===== */
.black { color: #000000; }
.almost-black { color: #1E1E1E; }
.primary-red { color: #C61818; }
.white { color: #FFFFFF; }
.grey-light { color: #E3E3E3; }
.background-grey { color: #F5F5F5; }
.green-dark { color: #537455; }
.green-light { color: #E8F6E9; }
.orange-brown { color: #C8825E; }
.yellow-light { color: #FFF2DF; }
.red-light { color: #FFE8EC; }
</style>