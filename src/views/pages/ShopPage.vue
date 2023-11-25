<script setup>
// All inport  Code Is Here.....................................................................................................
import { ProductCard } from '@/components';
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
// product data fetch 
import {useProduct} from '@/stores'
// All Variable  Code Is Here.....................................................................................................
const product = useProduct();
const { products, recentProducts, topProducts, featureProducts } = storeToRefs(product);

// API Calling Code Is Here.....................................................................................................


// All Function  Code Is Here.....................................................................................................

const productShort = () => {
    // console.log();
    // if (event.target.value == 'recent') {
    //     product.getRecentProductData();
    // }else if(event.target.value == 'top'){
    //     product.getTopProductData();
    // }else{
    //     product.getFeatureProductData();   
    // }
    console.log('hello');
    product.$reset();
    product.getRecentProductData();
}

onMounted(() => {
  product.getData();
})

</script>

<template>
  <div>
    <!--=====================================
                    BANNER PART START
        =======================================-->
        <section class="inner-section single-banner" style="background: url(@/assets/images/single-banner.jpg) no-repeat center;">
            <div class="container">
                <h2>Shop 3 Column</h2>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">shop-3column</li>
                </ol>
            </div>
        </section>
        <!--=====================================
                    BANNER PART END
        =======================================-->
    <section class="inner-section shop-part">
            <div class="container">
                <div class="row content-reverse">
                    <div class="col-lg-3">
                        <div class="shop-widget-promo">
                            <a href="#"><img src="@/assets/images/promo/shop/01.jpg" alt="promo"></a>
                        </div>
                        <div class="shop-widget">
                            <h6 class="shop-widget-title">Filter by Price</h6>
                            <form>
                                <div class="shop-widget-group">
                                    <input type="text" placeholder="Min - 00">
                                    <input type="text" placeholder="Max - 5k">
                                </div>
                                <button class="shop-widget-btn">
                                    <i class="fas fa-search"></i>
                                    <span>search</span>
                                </button>
                            </form>
                        </div>
                        <div class="shop-widget">
                            <h6 class="shop-widget-title">Filter by Brand</h6>
                            <form>
                                <input class="shop-widget-search" type="text" placeholder="Search...">
                                <ul class="shop-widget-list shop-widget-scroll">
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="brand1">
                                            <label for="brand1">mari gold</label>
                                        </div>
                                        <span class="shop-widget-number">(13)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="brand2">
                                            <label for="brand2">tredar</label>
                                        </div>
                                        <span class="shop-widget-number">(28)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="brand3">
                                            <label for="brand3">keya</label>
                                        </div>
                                        <span class="shop-widget-number">(35)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="brand4">
                                            <label for="brand4">diamond</label>
                                        </div>
                                        <span class="shop-widget-number">(47)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="brand5">
                                            <label for="brand5">lilly's</label>
                                        </div>
                                        <span class="shop-widget-number">(59)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="brand6">
                                            <label for="brand6">fremant</label>
                                        </div>
                                        <span class="shop-widget-number">(64)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="brand7">
                                            <label for="brand7">avocads</label>
                                        </div>
                                        <span class="shop-widget-number">(77)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="brand8">
                                            <label for="brand8">boroclas</label>
                                        </div>
                                        <span class="shop-widget-number">(85)</span>
                                    </li>
                                </ul>
                                <button class="shop-widget-btn">
                                    <i class="far fa-trash-alt"></i>
                                    <span>clear filter</span>
                                </button>
                            </form>
                        </div>
                        <div class="shop-widget">
                            <h6 class="shop-widget-title">Filter by Category</h6>
                            <form>
                                <input class="shop-widget-search" type="text" placeholder="Search...">
                                <ul class="shop-widget-list shop-widget-scroll">
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate1">
                                            <label for="cate1">vegetables</label>
                                        </div>
                                        <span class="shop-widget-number">(13)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate2">
                                            <label for="cate2">groceries</label>
                                        </div>
                                        <span class="shop-widget-number">(28)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate3">
                                            <label for="cate3">fruits</label>
                                        </div>
                                        <span class="shop-widget-number">(35)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate4">
                                            <label for="cate4">dairy farm</label>
                                        </div>
                                        <span class="shop-widget-number">(47)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate5">
                                            <label for="cate5">sea foods</label>
                                        </div>
                                        <span class="shop-widget-number">(59)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate6">
                                            <label for="cate6">diet foods</label>
                                        </div>
                                        <span class="shop-widget-number">(64)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate7">
                                            <label for="cate7">dry foods</label>
                                        </div>
                                        <span class="shop-widget-number">(77)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate8">
                                            <label for="cate8">fast foods</label>
                                        </div>
                                        <span class="shop-widget-number">(85)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate9">
                                            <label for="cate9">drinks</label>
                                        </div>
                                        <span class="shop-widget-number">(92)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate10">
                                            <label for="cate10">coffee</label>
                                        </div>
                                        <span class="shop-widget-number">(21)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate11">
                                            <label for="cate11">meats</label>
                                        </div>
                                        <span class="shop-widget-number">(14)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="cate12">
                                            <label for="cate12">fishes</label>
                                        </div>
                                        <span class="shop-widget-number">(56)</span>
                                    </li>
                                </ul>
                                <button class="shop-widget-btn">
                                    <i class="far fa-trash-alt"></i>
                                    <span>clear filter</span>
                                </button>
                            </form>
                        </div>
                        <div class="shop-widget">
                            <h6 class="shop-widget-title">Filter by Tag</h6>
                            <form>
                                <ul class="shop-widget-list">
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="tag1">
                                            <label for="tag1">new items</label>
                                        </div>
                                        <span class="shop-widget-number">(13)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="tag2">
                                            <label for="tag2">sale items</label>
                                        </div>
                                        <span class="shop-widget-number">(28)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="tag3">
                                            <label for="tag3">rating items</label>
                                        </div>
                                        <span class="shop-widget-number">(35)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="tag4">
                                            <label for="tag4">feature items</label>
                                        </div>
                                        <span class="shop-widget-number">(47)</span>
                                    </li>
                                    <li>
                                        <div class="shop-widget-content">
                                            <input type="checkbox" id="tag5">
                                            <label for="tag5">discount items</label>
                                        </div>
                                        <span class="shop-widget-number">(59)</span>
                                    </li>
                                </ul>
                                <button class="shop-widget-btn">
                                    <i class="far fa-trash-alt"></i>
                                    <span>clear filter</span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="top-filter">
                                    <div class="filter-show">
                                        <label class="filter-label">Show :</label>
                                        <select class="form-select filter-select">
                                            <option value="1">12</option>
                                            <option value="2">24</option>
                                            <option value="3">36</option>
                                        </select>
                                    </div>
                                    <div class="filter-short">
                                        <label class="filter-label">Short by :</label>
                                        <select class="form-select filter-select" @change="productShort">
                                            <option selected>default</option>
                                            <option value="top">Top</option>
                                            <option value="feature">Feature</option>
                                            <option value="recent">Recent</option>
                                        </select>
                                    </div>
                                    <div class="filter-action">
                                        <a href="shop-3column.html" class="active" title="Three Column"><i class="fas fa-th"></i></a>
                                        <a href="shop-2column.html" title="Two Column"><i class="fas fa-th-large"></i></a>
                                        <a href="shop-1column.html" title="One Column"><i class="fas fa-th-list"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                            <div class="col" v-for="(product, index) in products.data" :key="index">
                               <ProductCard :product="product" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="bottom-paginate">
                                    <p class="page-info">Showing 12 of 60 Results</p>
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                <i class="fas fa-long-arrow-alt-left"></i>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">...</li>
                                        <li class="page-item"><a class="page-link" href="#">60</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                <i class="fas fa-long-arrow-alt-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  </div>
</template>
