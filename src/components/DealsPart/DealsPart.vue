<script setup>
// All Import File  Code Is Here......................................................................................................
import { ProductCard } from '@/components';
import { ref, onMounted } from 'vue';
// slider get data 
import { storeToRefs } from 'pinia';
// slider data fetch 
import {useProduct} from '@/stores'
// All Variable  Code Is Here.....................................................................................................
const recentProduct = useProduct();
const { recentProducts } = storeToRefs(recentProduct);

// API Calling Code Is Here.....................................................................................................


// All Function  Code Is Here.....................................................................................................

onMounted(() => {
  recentProduct.getRecentProductData();
})

</script>

<template>
  <div>
    <section class="section deals-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>best deals on items</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="countdown deals-clock" data-countdown="2021/12/31">
              <span class="countdown-time"
                ><span>00</span><small>days</small></span
              >
              <span class="countdown-time"
                ><span>00</span><small>hours</small></span
              >
              <span class="countdown-time"
                ><span>00</span><small>minutes</small></span
              >
              <span class="countdown-time"
                ><span>00</span><small>seconds</small></span
              >
            </div>
          </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
          <div class="col" v-for="(product, index) in recentProducts" :key="index">
            <ProductCard :product="product"/>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-btn-25">
              <a href="shop-4column.html" class="btn btn-inline">
                <i class="fas fa-eye"></i>
                <span>view all deals</span>
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
