<template>
  <!-- 首頁 人物設定區塊 -->
  <div class="container mt-2 mb-md-10 mb-sm-2">
    <div class="row">
      <!-- 人物設定左側圖片區塊 -->
      <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
        <img
          src="../../assets/images/character/character.webp"
          alt="人物"
          class="w-100 w-md-75 mt-md-3 mt-sm-2 mt-md-5"
          loading="lazy"
        />
      </div>
      <div class="col-12 col-md-6 d-flex flex-column">
        <div class="mt-md-10 mt-sm-5">
          <h2 class="fs-2 fs-md fw-bold mt-md-10 mt-sm-5">人物設定</h2>
          <p class="fs-5 mt-md-5 mt-sm-3">
            <span class="fs-5">修練了一百年的二尾狐，目前100歲歲了～</span>
            <br /><br />
            <b class="fw-bold">生日</b> － 06/22
            <br /><br />
            <b class="fs-5">圖奇合作夥伴紀念日</b> － 2023/12/30
            <br /><br />
            <b class="fs-5">圖奇開台紀念日</b>－<del>2021/11/16</del>
            <span class="fs-6 ml-5">&nbsp;&nbsp;&nbsp;這是998前期各種嘗試的日期所以不算數啦</span>
            <br />
            <br />
          </p>
          <h2 class="fs-2 fs-md fw-bold mt-md-5">設定圖</h2>
          <img
              src="../../assets/images/character/full.webp"
              alt="設定圖"
              class="w-md-100 mt-md-2 mt-sm-3 mw-100"
              loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from 'swiper/element/bundle';

export default {
  data() {
    return {
      spaceBetween: 24,
      posts: [
        {
          likes: '5,679',
          date: '202/03/06',
          image:
            'https://res.cloudinary.com/dabraxbag/image/upload/v1713682270/post1_owsn9y.webp',
        },
        {
          likes: '11.6K',
          date: '2023/03/01',
          image:
            'https://res.cloudinary.com/dabraxbag/image/upload/v1713682288/post2_k8ykor.webp',
        },
        {
          likes: '7,526',
          date: '2023/02/02',
          image:
            'https://res.cloudinary.com/dabraxbag/image/upload/v1713682289/post3_ivmbcp.webp',
        },
        {
          likes: '1,427',
          date: '2023/12/01',
          image:
            'https://res.cloudinary.com/dabraxbag/image/upload/v1713682289/post4_pcxp7m.webp',
        },
        {
          likes: '2,499',
          date: '2023/02/02',
          image:
            'https://res.cloudinary.com/dabraxbag/image/upload/v1713682289/post5_qkc3lh.webp',
        },
        {
          likes: '3,663',
          date: '2023/05/11',
          image:
            'https://res.cloudinary.com/dabraxbag/image/upload/v1713682289/post6_ppysvw.webp',
        },
        {
          likes: '5,981',
          date: '2023/01/30',
          image:
            'https://res.cloudinary.com/dabraxbag/image/upload/v1713682289/post7_ul1ygc.webp',
        },
        {
          likes: '31.8K',
          date: '2022/12/25',
          image:
            'https://res.cloudinary.com/dabraxbag/image/upload/v1713682290/post8_x8dwss.webp',
        },
      ],
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

// 追蹤 Twitch 貼文
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
