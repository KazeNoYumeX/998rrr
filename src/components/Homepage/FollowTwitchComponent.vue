<template>
  <!-- 首頁 追蹤 Twitch 區塊 -->
  <div class="container pt-20 pt-md-30 d-flex flex-column align-items-center">
    <!-- 追蹤 Twitch 標題 -->
    <TitleBlockComponent
      title="TWITCH"
      text1="修練了一百年的二尾狐仙"
      text2="期待與大家一起創造快樂和諧的環境！"
    />

    <!-- 追蹤 Twitch 追蹤區塊 -->
    <div
      class="w-100 w-md-auto border border-4 border-dark d-flex flex-column flex-md-row justify-content-between align-items-center p-6 p-md-8 bdrs-4"
    >
      <div
        class="d-flex flex-column flex-md-row justify-content-md-between align-items-center mb-6 mb-md-0 me-md-10"
      >
        <img
          src="../../assets/images/socialMedia/avatar.webp"
          alt="998 頭像"
          class="w-115px mb-4 mb-md-0 me-md-5 bg-info rounded-circle"
          loading="lazy"
        />
        <div class="text-center text-md-start">
          <p class="fs-4 fw-bold mb-1 mb-md-2">@998rrr
            <i class="fa-brands fa-twitch text-purple-500"></i>
          </p>
          <p>1.4萬 位追隨者</p>
        </div>
      </div>
      <div>
        <a
          href="https://www.twitch.tv/998rrr"
          target="_blank"
          class="btn w-100 py-4 px-15 bg-light border border-4 border-dark bdrs-4 fs-5 fs-md-4 fw-bold button-hover"
          >
          追隨頻道</a
        >
      </div>
    </div>
  </div>
  <!-- 追蹤 Twitch 貼文區塊 -->
  <div class="bg-dark bg-md-transparent py-3 py-md-0 mt-4 mt-md-20">
    <swiper-container
      class="w-100 bg-posts container posts-swiper"
      :space-between="spaceBetween"
      :pagination="false"
      :navigation="false"
      :breakpoints="{
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }"
      @swiperprogress="onProgress"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide v-for="(post, index) in posts" :key="index">
        <div :class="['slide-img', 'mb-4']">
          <img class="slide-post-img" :src="post.image" alt="post image" />
        </div>
        <div class="d-flex justify-content-between text-light fw-bold">
          <div>
            <i class="fa-solid fa-heart text-orange-998-500 me-1"></i>
            {{ post.likes }}
          </div>
          <div>{{ post.date }}</div>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
  <!-- 貼文切換按鈕 -->
  <div v-if="posts.length > 0"
    class="navigation position-relative mt-5 mt-md-11 d-flex justify-content-center align-items-start gap-5"
  >
    <div
      class="swiper-button-prev"
      type="button"
      @click="postsSlidePrev('.posts-swiper')"
    >
      <span class="material-symbols-outlined fs-1"> arrow_circle_left </span>
    </div>
    <div
      class="swiper-button-next"
      type="button"
      @click="postsSlideNext('.posts-swiper')"
    >
      <span class="material-symbols-outlined fs-1"> arrow_circle_right </span>
    </div>
  </div>
</template>

<script>
import { register } from 'swiper/element/bundle';
import TitleBlockComponent from '@/components/Homepage/TitleBlockComponent.vue';

export default {
  components: {
    TitleBlockComponent,
  },
  data() {
    return {
      spaceBetween: 24,
      posts: [],
    };
  },
  beforeMount() {
    register();
  },
  methods: {
    postsSlidePrev(el) {
      const swiperEl = document.querySelector(el);
      swiperEl.swiper.slidePrev();
    },
    postsSlideNext(el) {
      const swiperEl = document.querySelector(el);
      swiperEl.swiper.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import '../../assets/SCSS/base/variables';
@import 'bootstrap/scss/mixins';

// 追蹤 ig 貼文
.slide-img {
  height: 410px;
  @include media-breakpoint-up(md) {
    height: 357px;
  }
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 4px;

  @include media-breakpoint-up(md) {
    filter: brightness(70%) blur(2px);
  }

  &:hover {
    filter: none;
  }
}

.slide-post-img {
  width: 100%; /* 圖片寬度填滿容器 */
  height: 100%; /* 圖片高度填滿容器 */
  object-fit: cover; /* 圖片填滿容器並保持比例 */
}

.bg-posts::after {
  content: '';
  position: absolute;
  background-color: $dark;

  @include media-breakpoint-up(md) {
    bottom: -24px;
    left: -24px;
    width: calc(100% + 24px * 2);
    height: 50%;
    background: linear-gradient(
      360deg,
      rgba($dark, 0.9) 10%,
      rgba($dark, 0.5) 50%,
      rgba($dark, 0) 100%
    );
  }
}

// 切換貼文按鈕
.swiper-button-prev,
.swiper-button-next {
  line-height: 0;
  user-select: none;
}
</style>
