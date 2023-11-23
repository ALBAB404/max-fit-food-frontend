<script setup>
import { CategorySideBar, CartSideBar,ProductCard, NavSideBar, MobileMenu,  Blog, ProductView, PromoPart, Banner, IntroPart, NewItem, Brand } from '@/components'
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
// product data fetch 
import {useProduct} from '@/stores'
// All Variable  Code Is Here.....................................................................................................
const product = useProduct();
const { recentProducts, topProducts, featureProducts } = storeToRefs(product);

// API Calling Code Is Here.....................................................................................................


// All Function  Code Is Here.....................................................................................................

onMounted(() => {
  product.getRecentProductData();
  product.getTopProductData();
  product.getFeatureProductData();
})


</script>

<template>
  <div>
      <!--=====================================
                CATEGORY SIDEBAR PART START
        =======================================-->
      <CategorySideBar />
    <!--=====================================
                CATEGORY SIDEBAR PART END
        =======================================-->

    <!--=====================================
                  CART SIDEBAR PART START
        =======================================-->
    <CartSideBar />
    <!--=====================================
                    CART SIDEBAR PART END
        =======================================-->

    <!--=====================================
                  NAV SIDEBAR PART START
        =======================================-->
    <NavSideBar />
    <!--=====================================
                  NAV SIDEBAR PART END
        =======================================-->

    <!--=====================================
                    MOBILE-MENU PART START
        =======================================-->
    <MobileMenu />
    <!--=====================================
                    MOBILE-MENU PART END
        =======================================-->

    <!--=====================================
                    PRODUCT VIEW START
        =======================================-->
    <ProductView />
    <!--=====================================
                    PRODUCT VIEW END
        =======================================-->

    <!--=====================================
                    BANNER PART START
        =======================================-->
    <Banner />
    <!--=====================================
                    BANNER PART END
        =======================================-->
   <!--=====================================
                    BRAND PART START
        =======================================-->
    <Brand />
    <!--=====================================
                    BRAND PART END
        =======================================-->
    <!--=====================================
                    INTRO PART START
        =======================================-->
   <IntroPart />
    <!--=====================================
                    INTRO PART END
        =======================================-->

    <!--=====================================
                    Recent Product START
        =======================================-->
     <section class="section deals-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Recent Product</h2>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
          <div class="col" v-for="(product, index) in recentProducts.result" :key="index">
            <ProductCard :product="product" :type="'recent'"/>
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
    <!--=====================================
                    Recent Product END
        =======================================-->

    <!--=====================================
                    PROMO PART START
        =======================================-->
    <PromoPart  :image="'http://localhost:5173/src/assets/images/promo/home/9.png'"/>
    <!--=====================================
                    PROMO PART END
        =======================================-->
    <!--=====================================
                    Top Product START
        =======================================-->
      <section class="section deals-part">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Top Product</h2>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
          <div class="col" v-for="(product, index) in topProducts.result" :key="index">
            <ProductCard :product="product" :type="'Top'"/>
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
    <!--=====================================
                    Top Product END
        =======================================-->

    <!--=====================================
                    PROMO PART START
        =======================================-->
    <PromoPart :image="'http://localhost:5173/src/assets/images/promo/home/1.png'"/>
    <!--=====================================
                    PROMO PART END
        =======================================-->
    <!--=====================================
                    Slider Feature Product START
        =======================================-->
     <NewItem :featureProducts="featureProducts"/>
    <!--=====================================
                    Slider Feature Product END
        =======================================-->

    <!--=====================================
                    PROMO PART START
        =======================================-->
    <PromoPart :image="'http://localhost:5173/src/assets/images/promo/home/2.png'"/>
    <!--=====================================
                    PROMO PART END
        =======================================-->

    <!--=====================================
                      BLOG PART START
        =======================================-->
    <Blog />
    <!--=====================================
                      BLOG PART END
        =======================================-->
  </div>
</template>
