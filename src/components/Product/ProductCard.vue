<script setup>
    const props = defineProps({
        product: Object,
        type: String,
        required: true,
    })
</script>

<template>
  <div>
    <div class="product-card">
      <div class="product-media">
        <div class="product-label">
          <label class="label-text off">-{{ product.offer_percent }}%</label>
          <label class="label-text new">{{ type }}</label>
        </div>
        <button class="product-wish wish">
          <i class="fas fa-heart"></i>
        </button>
        <a class="product-image" href="product-video.html">
          <img :src="product.image" alt="product" />
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
        <h6 class="product-name">
          <a href="product-video.html">{{ product.name }}</a>
        </h6>
        <h6 class="product-price">
          <del>${{ product.mrp }}</del>
          <span>${{ product.offer_price }}</span>
        </h6>
        <div class="row">
        <div class="col-md-6">
         <button class="product-add" title="Add to Cart">
          <i class="fas fa-shopping-basket"></i>
          <span>add</span>
        </button>
        </div>
        <div class="col-md-6">
         <button class="product-add" title="Add to Cart">
          <i class="fas fa-shopping-basket"></i>
          <span>Buy Now</span>
        </button>
        </div>
        </div>
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
  </div>
</template>

<style></style>
