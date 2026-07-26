<script setup>
</script>

<template>
  <RouterLink to="/" class="logo">
    <div class="logo-square">
      <svg class="logo-icon" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50.9411 28.0173V42.8802C50.9411 44.2582 50.288 45.5546 49.1809 46.3747C40.98 52.4494 29.7718 52.4494 21.571 46.3747C20.4639 45.5546 19.8109 44.2582 19.8109 42.8802V29.0078M39.6211 22.6403L54.5981 27.2166C55.7881 27.5803 56.6012 28.6786 56.6012 29.923V44.8762M56.6012 50.0645V53.7704M36.7656 32.9789L54.6292 26.7264C57.1561 25.8421 57.1561 22.2686 54.6292 21.3842L36.7656 15.1319C34.9498 14.4964 32.972 14.4964 31.1562 15.1319L13.2926 21.3842C10.7658 22.2686 10.7658 25.8421 13.2926 26.7264L31.1562 32.9789C32.972 33.6142 34.9498 33.6142 36.7656 32.9789Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="logo-text">
      <p class="h1">НГК</p>
      <p class="h2">работа</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
a{
  margin-left: 0;
}

.logo-square {
  width: 45px;
  height: 45px;
  background-color: var(--color-primary-red);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.logo-icon {
  width: 35px;
  height: 35px;
  display: block;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.h1 {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--color-black);
  margin: 0;
  line-height: 1;
}

.h2 {
  font-size: 0.85rem;
  font-weight: 300;
  color: var(--color-black);
  margin: 0;
  line-height: 1;
}
@media (max-width: 1440px){
  .logo-square {
    width: 53.57px;
    height: 53.57px;
  }
  .logo-icon {
    width: 47.31px;
    height: 47.31px;
  }
  .h1 {
    font-size: 1.5rem;
  }

  .h2 {
    font-size: 1rem;
  }
}
@media (max-width: 768px){
  .logo {
    gap: 5px;
  }

  .logo-square {
    width: 40px;
    height: 42px;
  }
  .logo-icon {
    width: 25px;
    height: 25px;
  }
  .h1 {
    font-size: 1.25rem;
  }

  .h2 {
    font-size: 0.875rem;
  }
  .logo-text{
    gap: 0px;
  }
}
@media (max-width: 360px){
  .logo {
    gap: 5px;
  }

  .logo-square {
    width: 32.7px;
    height: 32.7px;
    border-radius: 5px;
  }
  .logo-icon {
    width: 21px;
    height: 21px;
  }

  .h1 {
    font-size: 1rem;
  }
  .logo-text{
    gap: 0px;
  }
  .h2 {
    font-size: 0.75rem;
  }
}
</style>