<script setup>
// All Import File  Code Is Here......................................................................................................
import { ref,onMounted } from 'vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Autoplay, Navigation } from 'swiper/modules'

// slider get data 
import { storeToRefs } from 'pinia';
// slider data fetch 
import {useSlider, useCategory} from '@/stores'


// All Variable  Code Is Here.....................................................................................................
const newSlide = ref([Navigation])
const modules = ref([Pagination,Autoplay]);

// slider data fetch 
const slider = useSlider();
const {sliders} = storeToRefs(slider)
// category data fetch 
const category = useCategory();
const {categories} = storeToRefs(category)

onMounted(() => {
    slider.getData();
    category.getData();
})

// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>

<template>
  <div>
    <section class="banner-part">

      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="banner-category">
              <div class="banner-category-head">
                <i class="fas fa-bars"></i>
                <span>top categories</span>
              </div>
              <ul class="banner-category-list">
                <li class="banner-category-item" v-for="(category, index) in categories" :key="index">
                  <a href="#">
                    <i class="flaticon-vegetable"></i>
                    <span>{{ category.name }}</span>
                  </a>
                  <div class="banner-category-dropdown">
                    <h5>vegetables item</h5>
                    <div class="banner-sub-category">
                      <ul>
                        <li><a href="#">carrot</a></li>
                        <li><a href="#">broccoli</a></li>
                        <li><a href="#">asparagus</a></li>
                        <li><a href="#">cauliflower</a></li>
                        <li><a href="#">cucumber</a></li>
                      </ul>
                      <ul>
                        <li><a href="#">eggplant</a></li>
                        <li><a href="#">green pepper</a></li>
                        <li><a href="#">lettuce</a></li>
                        <li><a href="#">mushrooms</a></li>
                        <li><a href="#">onion</a></li>
                      </ul>
                      <ul>
                        <li><a href="#">potato</a></li>
                        <li><a href="#">pumpkin</a></li>
                        <li><a href="#">tomato</a></li>
                        <li><a href="#">beetroot</a></li>
                        <li><a href="#">zucchini</a></li>
                      </ul>
                      <ul>
                        <li><a href="#">radish</a></li>
                        <li><a href="#">artichoke</a></li>
                        <li><a href="#">cabbage</a></li>
                        <li><a href="#">celery</a></li>
                        <li><a href="#">parsley</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="row">
              <div class="col-lg-12">
                <div class="home-grid-slider slider-dots">
                   <swiper
                      :spaceBetween="30"
                      :loop="true"
                      :pagination="{
                        clickable: true,
                      }"
                      :autoplay="{
                          delay: 2000,
                        }"
                      :modules="modules"
                      
                      class="mySwiper"
                    >
                      <swiper-slide v-for="(slider, index) in sliders" :key="index">
                        <div class="banner-image">
                          <img :src="slider.image" alt="" />
                        </div>
                      </swiper-slide>
                    </swiper>

                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <div class="banner-promo">
                  <a href="#"
                    > <img src="@/assets/images/promo/home/4.png" alt="promo"
                  /></a>
                </div>
              </div>
              <div class="col-md-6 col-lg-6">
                <div class="banner-promo">
                  <a href="#"
                    > <img src="@/assets/images/promo/home/5.png" alt="promo"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style>

</style>
