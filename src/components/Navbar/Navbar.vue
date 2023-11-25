<script setup>
// All Import File  Code Is Here......................................................................................................

// All Variable  Code Is Here.....................................................................................................


// API Calling Code Is Here.....................................................................................................


// All Function  Code Is Here.....................................................................................................


</script>

<template lang="">
  <div>
    <!--=====================================
                    NAVBAR PART START
        =======================================-->
        <nav class="navbar-part">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="navbar-content">
                            <ul class="navbar-list">
                                <li class="navbar-item dropdown">
                                    <router-link :to="{ name: 'homePage' }" class="navbar-link">Home</router-link>
                                </li>
                                <li class="navbar-item dropdown-megamenu">
                                    <router-link :to="{ name: 'shopPage' }" class="navbar-link">Shop</router-link>
                                </li>
                                <li class="navbar-item dropdown">
                                    <a class="navbar-link dropdown-arrow" href="#">pages</a>
                                    <ul class="dropdown-position-list">
                                        <li><a href="faq.html">faqs</a></li>
                                        <li><a href="offer.html">offers</a></li>
                                        <li><a href="profile.html">my profile</a></li>
                                        <li><a href="wallet.html">my wallet</a></li>
                                        <li><a href="about.html">about us</a></li>
                                        <li><a href="contact.html">contact us</a></li>
                                        <li><a href="privacy.html">privacy policy</a></li>
                                        <li><a href="coming-soon.html">coming soon</a></li>
                                        <li><a href="blank-page.html">blank page</a></li>
                                        <li><a href="error.html">404 Error</a></li>
                                        <li><a href="email-template.html">email template</a></li>
                                    </ul>
                                </li>
                                <li class="navbar-item dropdown">
                                    <a class="navbar-link dropdown-arrow" href="#">authentic</a>
                                    <ul class="dropdown-position-list">
                                        <li><a href="login.html">login</a></li>
                                        <li><a href="register.html">register</a></li>
                                        <li><a href="reset-password.html">reset password</a></li>
                                        <li><a href="change-password.html">change password</a></li>
                                    </ul>
                                </li>
                                <li class="navbar-item dropdown">
                                    <a class="navbar-link dropdown-arrow" href="#">blogs</a>
                                    <ul class="dropdown-position-list">
                                        <li><a href="blog-grid.html">blog grid</a></li>
                                        <li><a href="blog-standard.html">blog standard</a></li>
                                        <li><a href="blog-details.html">blog details</a></li>
                                        <li><a href="blog-author.html">blog author</a></li>
                                    </ul>
                                </li>
                                <li class="navbar-item">
                                    <a class="navbar-link" href="faq.html">need help</a>
                                </li>
                                <li class="navbar-item">
                                    <a class="navbar-link" href="contact.html">contact us</a>
                                </li>
                            </ul>
                            <div class="navbar-select-group">
                                <div class="navbar-select">
                                    <i class="fas fa-flag"></i>
                                    <select class="select">
                                        <option value="english" selected>english</option>
                                        <option value="bangali">bangali</option>
                                        <option value="arabic">arabic</option>
                                    </select>
                                </div>
                                <div class="navbar-select">
                                    <i class="fas fa-funnel-dollar"></i>
                                    <select class="select">
                                        <option value="english" selected>doller</option>
                                        <option value="bangali">pound</option>
                                        <option value="arabic">taka</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!--=====================================
                    NAVBAR PART END
        =======================================-->
  </div>
</template>

<style>

</style>
