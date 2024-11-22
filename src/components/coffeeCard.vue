<template>
  <div
    class="d-flex flex-center flex-column width-full height-full bg-gray-100 pa-3"
  >
    <h1 class="my-10 font-size-10 font-aust-bold">our special coffee</h1>
    <div class="width-full height-full max-width-1200">
      <Swiper
        :modules="modules"
        space-between="25"
        :pagination="{ clickable: true, dynamicBullets: true }"
        :autoplay="{ delay: 6000 }"
        slides-per-view="4"
      >
        <SwiperSlide v-for="item in 8">
          <div
            class="border-gray-100 shadow-1 my-10 width-full max-width-700 line-solid border-wa-9  radius-3 overflow-hidden transition d-flex flex-center flex-column"
          >
            <div
              class="d-flex flex-center flex-column width-full position-relative"
            >
              <img
                src="../assets/images/coffeeCard.jpg"
                class="width-full max-height-700 radius-3 height-full"
                alt=""
                style="z-index: 1"
              />
              <Icon
                icon="fa-solid:heart"
                width="30"
                height="30"
                @click="liked = !liked"
                :class="{ 'text-red-500': liked, 'text-gray-100': !liked }"
                class="transition cursor-pointer position-absolute position-right ma-1"
                style="z-index: 100 !important; top: 5px; right: 5px"
              />  
            </div>

            <div class="width-full pa-2 d-flex flex-column gap-4">
              <h1 class="font-size-8 font-aust-bold">lungo coffee</h1>
              <p class="font-size-4 text-gray-400 font-aust-medium">
                Lorem ipsum dolor sit amet.
              </p>
              <div class="d-flex flex-space-between mt-5 width-full gap-2">
                <h1 class="font-size-6 font-aust-bold">199$</h1>
                <button
                  class="border-none outline-none radius-5 py-2 hover-button-reverse bg-lightBrown-800 text-black transition cursor-pointer px-4 font-size-4 font-aust-medium"
                >
                  order now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Icon } from "@iconify/vue";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  EffectCards,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const modules = ref([
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
  EffectCube,
  EffectCards,
  EffectFade,
]);
const liked = ref(false);
</script>

<style lang="scss" scoped></style>
