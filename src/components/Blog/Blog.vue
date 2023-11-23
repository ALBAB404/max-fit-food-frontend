<script setup>
/// All Import File  Code Is Here......................................................................................................
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
  <section class="section blog-part">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading">
              <h2>Read our articles</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-slider slider-arrow">

              <swiper
                :slidesPerView="3"
                :sliderPerGroup="3"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :navigation="true"
                :modules="newSlide"
                class="mySwiper"
              >
                <swiper-slide>
                 <div class="blog-card">
                <div class="blog-media">
                  <a class="blog-img" href="#">
                    <img src="@/assets/images/blog/1.png" alt="blog" />
                  </a>
                </div>
                <div class="blog-content">
                  <ul class="blog-meta">
                    <li>
                      <i class="fas fa-user"></i>
                      <span>admin</span>
                    </li>
                    <li>
                      <i class="fas fa-calendar-alt"></i>
                      <span>february 02, 2021</span>
                    </li>
                  </ul>
                  <h4 class="blog-title">
                    <a href="blog-details.html"
                      >Voluptate blanditiis provident Lorem ipsum dolor sit
                      amet</a
                    >
                  </h4>
                  <p class="blog-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias autem recusandae deleniti nam dignissimos sequi ...
                  </p>
                  <a class="blog-btn" href="#">
                    <span>read more</span>
                    <i class="icofont-arrow-right"></i>
                  </a>
                </div>
              </div>
                </swiper-slide>
                <swiper-slide>
                 <div class="blog-card">
                <div class="blog-media">
                  <a class="blog-img" href="#">
                    <img src="@/assets/images/blog/3.png" alt="blog" />
                  </a>
                </div>
                <div class="blog-content">
                  <ul class="blog-meta">
                    <li>
                      <i class="fas fa-user"></i>
                      <span>admin</span>
                    </li>
                    <li>
                      <i class="fas fa-calendar-alt"></i>
                      <span>february 02, 2021</span>
                    </li>
                  </ul>
                  <h4 class="blog-title">
                    <a href="blog-details.html"
                      >Voluptate blanditiis provident Lorem ipsum dolor sit
                      amet</a
                    >
                  </h4>
                  <p class="blog-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias autem recusandae deleniti nam dignissimos sequi ...
                  </p>
                  <a class="blog-btn" href="#">
                    <span>read more</span>
                    <i class="icofont-arrow-right"></i>
                  </a>
                </div>
              </div>
                </swiper-slide>
                <swiper-slide>
                 <div class="blog-card">
                <div class="blog-media">
                  <a class="blog-img" href="#">
                    <img src="@/assets/images/blog/4.png" alt="blog" />
                  </a>
                </div>
                <div class="blog-content">
                  <ul class="blog-meta">
                    <li>
                      <i class="fas fa-user"></i>
                      <span>admin</span>
                    </li>
                    <li>
                      <i class="fas fa-calendar-alt"></i>
                      <span>february 02, 2021</span>
                    </li>
                  </ul>
                  <h4 class="blog-title">
                    <a href="blog-details.html"
                      >Voluptate blanditiis provident Lorem ipsum dolor sit
                      amet</a
                    >
                  </h4>
                  <p class="blog-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias autem recusandae deleniti nam dignissimos sequi ...
                  </p>
                  <a class="blog-btn" href="#">
                    <span>read more</span>
                    <i class="icofont-arrow-right"></i>
                  </a>
                </div>
              </div>
                </swiper-slide>
                <swiper-slide>
                 <div class="blog-card">
                <div class="blog-media">
                  <a class="blog-img" href="#">
                    <img src="@/assets/images/blog/5.png" alt="blog" />
                  </a>
                </div>
                <div class="blog-content">
                  <ul class="blog-meta">
                    <li>
                      <i class="fas fa-user"></i>
                      <span>admin</span>
                    </li>
                    <li>
                      <i class="fas fa-calendar-alt"></i>
                      <span>february 02, 2021</span>
                    </li>
                  </ul>
                  <h4 class="blog-title">
                    <a href="blog-details.html"
                      >Voluptate blanditiis provident Lorem ipsum dolor sit
                      amet</a
                    >
                  </h4>
                  <p class="blog-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias autem recusandae deleniti nam dignissimos sequi ...
                  </p>
                  <a class="blog-btn" href="#">
                    <span>read more</span>
                    <i class="icofont-arrow-right"></i>
                  </a>
                </div>
              </div>
                </swiper-slide>
                <swiper-slide>
                 <div class="blog-card">
                <div class="blog-media">
                  <a class="blog-img" href="#">
                    <img src="@/assets/images/blog/2.png" alt="blog" />
                  </a>
                </div>
                <div class="blog-content">
                  <ul class="blog-meta">
                    <li>
                      <i class="fas fa-user"></i>
                      <span>admin</span>
                    </li>
                    <li>
                      <i class="fas fa-calendar-alt"></i>
                      <span>february 02, 2021</span>
                    </li>
                  </ul>
                  <h4 class="blog-title">
                    <a href="blog-details.html"
                      >Voluptate blanditiis provident Lorem ipsum dolor sit
                      amet</a
                    >
                  </h4>
                  <p class="blog-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Alias autem recusandae deleniti nam dignissimos sequi ...
                  </p>
                  <a class="blog-btn" href="#">
                    <span>read more</span>
                    <i class="icofont-arrow-right"></i>
                  </a>
                </div>
              </div>
                </swiper-slide>
              </swiper>  
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-btn-25">
              <a href="blog-grid.html" class="btn btn-outline">
                <i class="fas fa-eye"></i>
                <span>view all blog</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>

</style>
