<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { TopHeader, Navbar,  Footer,  Newsletter,  } from '@/components'

</script>

<template>
  <div>

    <div class="backdrop"></div>
      <a class="backtop fas fa-arrow-up" href="#"></a>

      <div class="header-top alert fade show">
          <p>20% Discount All New Customers <a href="register.html">get register</a></p>
          <button data-bs-dismiss="alert"><i class="fas fa-times"></i></button>
      </div>

    <!--=====================================
                    HEADER PART START
        =======================================-->
      <TopHeader />
    <!--=====================================
                    HEADER PART END
        =======================================-->

    <!--=====================================
                    NAVBAR PART START
        =======================================-->
    <Navbar />
    <!--=====================================
                    NAVBAR PART END
        =======================================-->

    <router-view></router-view>

    <!--=====================================
                    NEWSLETTER PART START Newsletter
        =======================================-->
    <Newsletter />
    <!--=====================================
                    NEWSLETTER PART END
        =======================================-->

    <!--=====================================
                     FOOTER PART START
        =======================================-->
    <Footer />
    <!--=====================================
                      FOOTER PART END
        =======================================-->
  </div>
</template>

<style scoped></style>
