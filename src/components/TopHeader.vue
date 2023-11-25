<script setup>
// All Import File  Code Is Here......................................................................................................


// All Variable  Code Is Here.....................................................................................................


// API Calling Code Is Here.....................................................................................................


// All Function  Code Is Here.....................................................................................................


</script>

<template>
  <div>
    <header class="header-part">
      <div class="container">
        <div class="header-content">
          <div class="header-media-group">
            <button class="header-user">
              <img src="@/assets/images/user.png" alt="user" />
            </button>
            <a href="index.html"><img src="@/assets/images/maxfit.png" alt="logo" /></a>
            <button class="header-src"><i class="fas fa-search"></i></button>
          </div>

          <a href="index.html" class="header-logo">
            <img src="@/assets/images/maxfit.png" alt="logo" />
          </a>

          <form class="header-form">
            <input type="text" placeholder="Search anything..." />
            <button><i class="fas fa-search"></i></button>
          </form>

          <div class="header-widget-group">
            <a href="compare.html" class="header-widget" title="Compare List">
              <i class="fas fa-random"></i>
              <sup>0</sup>
            </a>
            <button class="header-widget header-cart" title="Cartlist">
              <i class="fas fa-shopping-basket"></i>
              <sup>9+</sup>
              <span>total price<small>$345.00</small></span>
            </button>
          </div>
        </div>
      </div>
    </header> 
  </div>
</template>

<style>

</style>
