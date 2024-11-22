<template>
  <div class="bg-lightBrown-300 font-aust-regular width-full height-full d-flex flex-center flex-column">
    <navbar />
    <div class="d-flex width-full flex-center height-full pa-5">
      <div class="d-flex width-full max-width-1200 flex-center gap-3">
        <div class="d-flex flex-column flex-space-between width-full text-center gap-4 font-size-5" v-for="item in 4">
          <img src="./assets/images/icon2.png" class="width-full max-width-100" alt="">
          <h3 class="font-size-5">hot coffee</h3>
        </div>
      </div>
    </div>
    <coffee-card />
    <div class="width-full bg-lightBrown-300 height-full d-flex flex-center">
      <img src="./assets/images/landing.jpg" class="width-full max-width-1200" alt="" />
    </div>
    <customers />
  </div>
</template>

<script setup lang="ts">
import CoffeeCard from './components/coffeeCard.vue';
import Customers from './components/customers.vue';
import Navbar from './components/navbar.vue';
</script>

<style lang="scss" scoped>

</style>