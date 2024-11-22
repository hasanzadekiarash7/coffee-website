<template>
  <div class="pa-5 width-full height-full max-width-1440 position-relative d-flex flex-center">
    <img
      src="../assets/images/serve.jpg"
      class="width-full height-full position-relative"
      style="transform: rotate(180deg); object-fit: cover"
      alt=""
    />
    <div
      class="position-absolute width-full d-flex flex-space-around align-center"
      style="z-index: 2; top: 30px"
    >
      <h1 class="font-size-11 font-aust-semiBold text-gray-100">coffee</h1>
      <ul class="d-flex flex-center gap-4 text-gray-100">
        <li class="font-size-6 cursor-pointer text-uppercase font-aust-semiBold">home</li>
        <li class="font-size-6 cursor-pointer text-uppercase font-aust-semiBold">about us</li>
        <li class="font-size-6 cursor-pointer text-uppercase font-aust-semiBold">coffee</li>
        <li class="font-size-6 cursor-pointer text-uppercase font-aust-semiBold">login</li>
      </ul>
      <div class="d-flex flex-center gap-4">
        <Icon
          icon="fa-solid:search"
          class="text-gray-100"
          width="30"
          height="30"
        />
        <Icon
          icon="fa-solid:language"
          class="text-gray-100"
          width="40"
          height="40"
        />
      </div>
    </div>
    <div
      class="d-flex flex-start flex-column position-absolute"
      style="z-index: 2; left: 40px"
    >
      <h1 class="font-size-11 font-aust-semiBold text-gray-100">welcome</h1>
      <h1 class="font-size-11 font-aust-semiBold text-gray-100">
        we serve the richest coffee
      </h1>
      <h1 class="font-size-11 font-aust-semiBold text-gray-100">in the world</h1>
      <button
        class="border-none outline-none radius-10 py-2 hover-button transition cursor-pointer px-8 font-size-6 font-aust-medium"
      >
        order now
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped></style>
