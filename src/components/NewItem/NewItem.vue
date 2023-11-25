<script setup>
// All Import File  Code Is Here......................................................................................................
import { ref } from "vue";
import { ProductCard } from '@/components'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";



// All Variable  Code Is Here.....................................................................................................
const newSlide = ref([Navigation]);
const modules = ref([Pagination, Autoplay]);

const props = defineProps({
  featureProducts: Object,

})


// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>

<template>
  <div>
    <section class="section newitem-part">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="section-heading">
              <h2>collected new items</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ul class="new-slider slider-arrow">
              <swiper
                :slidesPerView="4"
                :sliderPerGroup="4"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :navigation="true"
                :modules="newSlide"
                class="mySwiper"
              >
                <swiper-slide v-for="(product, index) in featureProducts.result" :key="index">
                  <li>
                    <ProductCard :product="product" :type="'Feature'"/>
                  </li>
                </swiper-slide>
              </swiper>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="section-btn-25">
              <a href="shop-4column.html" class="btn btn-outline">
                <i class="fas fa-eye"></i>
                <span>view all new item</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>

.swiper-button-prev, .swiper-button-next{
    border-radius: 50%;
    color: #ff0000;
    background: #ffffff;
    line-height: 45px;
    width: 45px;
    font-weight: 900;
}
.swiper-button-prev:after, .swiper-button-next:after{
    font-size: 20px !important;
}

.swiper-button-prev:hover, .swiper-button-next:hover{
    border-radius: 50%;
    background: #ff0000;
    color: white;
}
</style>
