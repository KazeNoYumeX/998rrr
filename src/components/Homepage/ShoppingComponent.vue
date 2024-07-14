<template>
  <!-- 限量周邊 -->
  <div class="bg-secondary-200" v-if="products.length > 0">
    <div
      class="container mt-20 mt-md-0 pt-5 pt-sm-10 pt-md-20 d-flex flex-column align-items-center"
    >
      <!-- 周邊標題 -->
      <TitleBlockComponent title="SHOPPING" text2="限量週邊" />

      <!-- 周邊輪播圖 -->
      <div class="col-12">
        <swiper-container
          class="shopping-swiper"
          :space-between="spaceBetween"
          :pagination="false"
          :navigation="false"
          :breakpoints="{
            375: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }"
          @swiperprogress="onProgress"
          @swiperslidechange="onSlideChange"
        >
          <swiper-slide
            v-for="product in products"
            :key="product.id"
            class="slide-container"
          >
            <a :href="product.url" target="_blank">
              <img
                class="slide-products-img"
                :src="product.imageUrl"
                :alt="product.title"
              />
            </a>
          </swiper-slide>
        </swiper-container>
      </div>
      <!-- 圖片切換按鈕 -->
      <div v-if="products.length > 0"
        class="navigation position-relative mt-5 mt-md-11 d-flex justify-content-center align-items-start gap-5"
      >
        <div
          class="swiper-button-prev"
          type="button"
          @click="postsSlidePrev('.shopping-swiper')"
        >
          <span class="material-symbols-outlined fs-1">
            arrow_circle_left
          </span>
        </div>
        <div
          class="swiper-button-next"
          type="button"
          @click="postsSlideNext('.shopping-swiper')"
        >
          <span class="material-symbols-outlined fs-1">
            arrow_circle_right
          </span>
        </div>
      </div>
    </div>
    <!-- 波浪動畫 -->
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.7"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
        />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
    </svg>
  </div>

  <!-- loading -->
  <VueLoading
    v-model:active="isLoading"
    :is-full-page="fullPage"
    :can-cancel="false"
  />
</template>

<script>
import TitleBlockComponent from '@/components/Homepage/TitleBlockComponent.vue';
import { register } from 'swiper/element/bundle';

// productsStore
import { useProductsStore } from '@/stores/productsStore';
import { mapState, mapActions } from 'pinia';

export default {
  components: {
    TitleBlockComponent,
  },
  data() {
    return {
      spaceBetween: 24,
      products: [
        {
          id: 1,
          title: '玖玖巴－酒友',
          url: 'https://www.myacg.com.tw/goods_detail.php?gid=4156643',
          imageUrl: 'https://cdn.myacg.com.tw/goods_images/4156643_1_202310180329005.jpg?v=UBEZT_165459&cod=2398729387a',
        },
        {
          id: 2,
          title: '賽馬娘桌墊－天秋舞台（小栗帽&小海灣）',
          url: 'https://www.snowfactory.com.tw/products/red-guava--confiture',
          imageUrl: 'https://cdn.myacg.com.tw/goods_images/3272208_1_202210250051152.jpg?v=UBEZT_165459&code=43987202397842',
        },
      ]
    };
  },
  computed: {
    ...mapState(useProductsStore, ['products', 'isLoading', 'fullPage']),
  },
  beforeMount() {
    register();
  },
  methods: {
    ...mapActions(useProductsStore, ['getProducts']),
    postsSlidePrev(el) {
      const swiperEl = document.querySelector(el);
      swiperEl.swiper.slidePrev();
    },
    postsSlideNext(el) {
      const swiperEl = document.querySelector(el);
      swiperEl.swiper.slideNext();
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
// 周邊
.slide-container {
  max-height: 300px; /* 限制 swiper-slide 的最大高度為 300px */
}

.slide-products-img {
  width: 100%; /* 圖片寬度填滿容器 */
  height: 300px; /* 圖片高度填滿容器 */
  object-fit: cover; /* 圖片填滿容器並保持比例 */
}

// 海浪動畫
.waves {
  position: relative;
  color: red;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}

// 切換貼文按鈕
.swiper-button-prev,
.swiper-button-next {
  line-height: 0;
  user-select: none;
}
</style>
