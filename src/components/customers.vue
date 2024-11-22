<template>
  <div
    class="d-flex flex-center flex-column width-full height-full bg-gray-100 pa-3"
  >
    <p class="font-size-4 font-aust-semiBold">our special coffee</p>
    <h1 class="my-10 font-size-10 font-aust-bold">our special coffee</h1>
    <div class="width-full height-full max-width-1200">
      <Swiper
        :modules="modules"
        space-between="25"
        :pagination="{ clickable: true, dynamicBullets: true, }"
        :autoplay="{ delay: 6000 }"
        slides-per-view="3"
      >
        <SwiperSlide v-for="item in 5">
          <div
            class="shadow-1 my-10 width-full max-width-700 gap-4 height-full pa-2 radius-1 overflow-hidden transition d-flex flex-center flex-column"
          >
            <div class="d-flex flex-space-between align-flex-start width-full">
              <div class="d-flex flex-center gap-2">
                <img src="../assets/vue.svg" class="avatar" />
                <div class="font-aust-medium">
                  <h1 class="font-size-5">hello world</h1>
                  <p class="font-size-3">Lorem, ipsum.</p>
                </div>
              </div>
              <div class="d-flex flex-center height-full">
                <Icon
                  v-for="item in 5"
                  icon="fa-solid:star"
                  width="20"
                  height="20"
                  class="transition text-yellow-400 ma-1"
                />
              </div>
            </div>
            <p class="text-gray-400 font-size-3 font-aust-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptatum officiis quas delectus quae soluta iusto perferendis
              natus! Dolorum, architecto.
            </p>
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
  EffectCreative,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
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
</script>

<style lang="scss" scoped>
.avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: fill; 
}
</style>
