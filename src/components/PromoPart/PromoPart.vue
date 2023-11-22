<script setup>
// All Import File  Code Is Here......................................................................................................
import { ref } from 'vue';

// All Variable  Code Is Here.....................................................................................................
const imageUrl = ref('images/promo/home/9.png');
// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>

<template>
  <div>
    <section class="section promo-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="promo-content"
              style="background: url(http://localhost:5173/src/assets/images/promo/home/9.png)no-repeat center center / cover">
              <h3>only <span>$45</span> per kilogram</h3>
              <h2>fresh Blueberries</h2>
              <a href="shop-4column.html" class="btn btn-inline">
                <i class="fas fa-shopping-basket"></i>
                <span>shop now</span>
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
