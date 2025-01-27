<script setup>
import Navigation from './components/navigation/Navigation.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="wrapper">
    <Navigation />
    <div class="container">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  margin-top: 70px;
  flex-grow: 1;
  padding-bottom: 80px;
}
</style>
