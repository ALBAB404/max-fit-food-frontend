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
                <swiper-slide>
                  <li>
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a class="product-image" href="product-video.html">
                          <img
                            src="@/assets/images/product/16.jpg"
                            alt="product"
                          />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play"
                            data-autoplay="true"
                            data-vbtype="video"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html">(3)</a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html">fresh green chilis</a>
                        </h6>
                        <h6 class="product-price">
                          <span>$28<small>/piece</small></span>
                        </h6>
                        <button class="product-add" title="Add to Cart">
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button class="action-minus" title="Quantity Minus">
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                          />
                          <button class="action-plus" title="Quantity Plus">
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </swiper-slide>
                <swiper-slide>
                  <li>
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a class="product-image" href="product-video.html">
                          <img
                            src="@/assets/images/product/17.jpg"
                            alt="product"
                          />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play"
                            data-autoplay="true"
                            data-vbtype="video"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html">(3)</a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html">fresh green chilis</a>
                        </h6>
                        <h6 class="product-price">
                          <span>$28<small>/piece</small></span>
                        </h6>
                        <button class="product-add" title="Add to Cart">
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button class="action-minus" title="Quantity Minus">
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                          />
                          <button class="action-plus" title="Quantity Plus">
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </swiper-slide>
                <swiper-slide>
                  <li>
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a class="product-image" href="product-video.html">
                          <img
                            src="@/assets/images/product/18.jpg"
                            alt="product"
                          />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play"
                            data-autoplay="true"
                            data-vbtype="video"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html">(3)</a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html">fresh green chilis</a>
                        </h6>
                        <h6 class="product-price">
                          <span>$28<small>/piece</small></span>
                        </h6>
                        <button class="product-add" title="Add to Cart">
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button class="action-minus" title="Quantity Minus">
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                          />
                          <button class="action-plus" title="Quantity Plus">
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </swiper-slide>
                <swiper-slide>
                  <li>
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a class="product-image" href="product-video.html">
                          <img
                            src="@/assets/images/product/19.jpg"
                            alt="product"
                          />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play"
                            data-autoplay="true"
                            data-vbtype="video"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html">(3)</a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html">fresh green chilis</a>
                        </h6>
                        <h6 class="product-price">
                          <span>$28<small>/piece</small></span>
                        </h6>
                        <button class="product-add" title="Add to Cart">
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button class="action-minus" title="Quantity Minus">
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                          />
                          <button class="action-plus" title="Quantity Plus">
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </swiper-slide>
                <swiper-slide>
                  <li>
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a class="product-image" href="product-video.html">
                          <img
                            src="@/assets/images/product/15.jpg"
                            alt="product"
                          />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play"
                            data-autoplay="true"
                            data-vbtype="video"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html">(3)</a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html">fresh green chilis</a>
                        </h6>
                        <h6 class="product-price">
                          <span>$28<small>/piece</small></span>
                        </h6>
                        <button class="product-add" title="Add to Cart">
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button class="action-minus" title="Quantity Minus">
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                          />
                          <button class="action-plus" title="Quantity Plus">
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
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
    color: #119744;
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
    background: #119744;
    color: white;
}
</style>
