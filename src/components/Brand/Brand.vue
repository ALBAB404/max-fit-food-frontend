<script setup>
// All Import File  Code Is Here......................................................................................................
import { ref } from "vue";

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
// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>

<template>
  <div>
    <section class="section brand-part">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading">
              <h2>shop by brands</h2>
            </div>
          </div>
        </div>
        <div class="brand-slider slider-arrow">
          <swiper
            :slidesPerView="5"
            :sliderPerGroup="5"
            :loop="true"
            :autoplay="{
              delay: 2000,
            }"
            :navigation="true"
            :modules="newSlide"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="brand-wrap">
                <div class="brand-media">
                  <img src="@/assets/images/brand/01.jpg" alt="brand" />
                  <div class="brand-overlay">
                    <a href="brand-single.html"><i class="fas fa-link"></i></a>
                  </div>
                </div>
                <div class="brand-meta">
                  <h4>natural greeny</h4>
                  <p>(45 items)</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="brand-wrap">
                <div class="brand-media">
                  <img src="@/assets/images/brand/01.jpg" alt="brand" />
                  <div class="brand-overlay">
                    <a href="brand-single.html"><i class="fas fa-link"></i></a>
                  </div>
                </div>
                <div class="brand-meta">
                  <h4>natural greeny</h4>
                  <p>(45 items)</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="brand-wrap">
                <div class="brand-media">
                  <img src="@/assets/images/brand/01.jpg" alt="brand" />
                  <div class="brand-overlay">
                    <a href="brand-single.html"><i class="fas fa-link"></i></a>
                  </div>
                </div>
                <div class="brand-meta">
                  <h4>natural greeny</h4>
                  <p>(45 items)</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="brand-wrap">
                <div class="brand-media">
                  <img src="@/assets/images/brand/01.jpg" alt="brand" />
                  <div class="brand-overlay">
                    <a href="brand-single.html"><i class="fas fa-link"></i></a>
                  </div>
                </div>
                <div class="brand-meta">
                  <h4>natural greeny</h4>
                  <p>(45 items)</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="brand-wrap">
                <div class="brand-media">
                  <img src="@/assets/images/brand/01.jpg" alt="brand" />
                  <div class="brand-overlay">
                    <a href="brand-single.html"><i class="fas fa-link"></i></a>
                  </div>
                </div>
                <div class="brand-meta">
                  <h4>natural greeny</h4>
                  <p>(45 items)</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="brand-wrap">
                <div class="brand-media">
                  <img src="@/assets/images/brand/01.jpg" alt="brand" />
                  <div class="brand-overlay">
                    <a href="brand-single.html"><i class="fas fa-link"></i></a>
                  </div>
                </div>
                <div class="brand-meta">
                  <h4>natural greeny</h4>
                  <p>(45 items)</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-btn-50">
              <a href="brand-list.html" class="btn btn-outline">
                <i class="fas fa-eye"></i>
                <span>view all brands</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
