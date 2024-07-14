<template>
  <!-- 首頁 banner 區塊 -->
  <div class="bg-secondary-100 position-relative overflow-hidden">
    <div class="container">
      <div class="row justify-content-between">
        <!-- banner 內容區塊 -->
        <div
            class="order-2 order-md-1 col-md-5 d-flex flex-column justify-content-between pt-8 pb-4 pt-md-30 pb-md-20"
        >
          <h1
              class="display-1 fw-bold fst-italic text-orange-998-500 position-relative"
          >
            <img
                src="../../assets/images/banner/logo.webp"
                alt="logo"
                class="w-100"
            />
          </h1>
          <div class="d-none d-md-block mt-md-16">
            <div class="mb-3 fs-4">
              <div class="d-inline-block">
                <span> 無聊發病練習用，非官方</span>
              </div>
            </div>
            <div class="mb-3 fs-4">
              <div class="d-inline-block">
                <span>Hi~ 我是 玖玖巴，</span>
              </div>
              <div class="d-inline-block d-md-block d-lg-inline-block">
                <div ref="typewriteAnimated" class="typewrite-animation">
                  <span
                      ref="typewriteText"
                      class="d-inline-block border-bottom border-4 border-orange-998-500"
                  >{{ typedText }}</span
                  >
                </div>
              </div>
            </div>
            <!--            <RouterLink-->
            <!--              to="/article/-NtEbjf_y0x19APmbqBX"-->
            <!--              type="button"-->
            <!--              class="py-4 px-15 fs-4 btn-dark border-0 button-hover mt-3"-->
            <!--            >-->
            <!--              斜槓故事-->
            <!--            </RouterLink>-->
          </div>
        </div>
        <!-- 首頁 banner 右側主圖  -->
        <div
            class="order-1 order-md-2 col-md-6 col-lg-7 d-flex justify-content-center align-items-center position-relative pt-8 pb-4 pt-md-30 pb-md-20"
        >
          <!-- banner 聲波圓 動畫 -->
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
          <div class="circle circle-4"></div>
          <div class="z-3">
            <img
                src="../../assets/images/banner/998.webp"
                alt="998"
                class="banner-img-home"
            />

            <!-- 在 index.html 的 head 加上圖片預載入，成功降低 load delay，但 Render Delay 變高，LCP 秒數沒什麼降低 -->
            <!-- <link
              rel="preload"
              href="/src/assets/images/banner/998rrr.webp"
              as="image"
              fetchpriority="high"
            /> -->
            <!-- <img
              src="../../assets/images/banner/998rrr.webp"
              alt="dr.meme"
              class="banner-img-home"
            /> -->
          </div>
          <div class="position-absolute top-50 start-50 translate-middle z-2">
            <img
                alt="meme1"
                class="meme-img meme-img-1"
                :src="stickers[0]"
            />
            <img
                :src="stickers[1]"
                alt="meme2"
                class="meme-img meme-img-2"
            />
            <img
                :src="stickers[2]"
                alt="meme3"
                class="meme-img meme-img-3"
            />
            <img
                :src="stickers[3]"
                alt="meme4"
                class="meme-img meme-img-4"
            />
            <img
                :src="stickers[4]"
                alt="meme5"
                class="meme-img meme-img-5"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-6 mt-md-0 d-flex justify-content-center">
    <div class="row text-center d-md-none">
      <div>
        <div class="mb-3 fs-6">
          <div class="d-inline-block">
            <span>Hi~ 我是 玖玖巴，</span>
          </div>
          <div class="d-inline-block">
            <div ref="typewriteAnimated" class="typewrite-animation">
              <span
                  ref="typewriteText"
                  class="d-inline-block border-bottom border-4 border-orange-998-500"
              >{{ typedText }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <!--        <RouterLink-->
        <!--          to="/article/-NtEbjf_y0x19APmbqBX"-->
        <!--          type="button"-->
        <!--          class="py-4 px-15 fs-4 btn-dark border-0 button-hover mt-3"-->
        <!--        >-->
        <!--          按鈕-->
        <!--        </RouterLink>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const urls = [
      'https://i.imgur.com/24Od8fA.png',
      'https://i.imgur.com/vOAsBZ3.png',
      'https://i.imgur.com/HUFqARc.png',
      'https://i.imgur.com/TVL4kKa.png',
      'https://i.imgur.com/Vmyt1VE.png',
      'https://i.imgur.com/XZf3nMo.png',
      'https://i.imgur.com/YiOKXF1.png',
      'https://i.imgur.com/nPhNB3k.png',
      'https://i.imgur.com/MjwCRZD.png',
      'https://i.imgur.com/XKJWUnf.png',
      'https://i.imgur.com/G4ZrlhC.png',
      'https://i.imgur.com/xDakMDl.png',
      'https://i.imgur.com/8RQlw5y.png',
      'https://i.imgur.com/Cb8NEOR.png',
      'https://i.imgur.com/Fh5R9uU.png',
      'https://i.imgur.com/22WM0z8.png',
      'https://i.imgur.com/I93IYDs.png',
      'https://i.imgur.com/7xGRjME.png',
      'https://i.imgur.com/1E1Mqbh.png',
    ];

    return {
      // arr 陣列儲存要變化的文字內容
      arr: [
        '初見安安',
        '喝水',
        '給我閉嘴',
        '站起來',
        '冷靜',
      ],
      typedText: '',
      currentIndex: 0,
      typingSpeed: 100, // 調整打字速度 (毫秒)
      pauseDuration: 3000, // 停頓時間 (毫秒)
      stickers: urls.sort(() => Math.random() - 0.5).slice(0, 5),
    };
  },
  methods: {
    typeText() {
      if (this.currentIndex < this.arr.length) {
        const currentElement = this.arr[this.currentIndex];
        if (this.typedText.length < currentElement.length) {
          this.typedText += currentElement.charAt(this.typedText.length);
        } else {
          setTimeout(() => {
            // Move to the next element in the array
            this.currentIndex++;
            // Clear typedText for the next element
            this.typedText = '';
            // Call typeText again for the next iteration
            this.typeText();
          }, this.pauseDuration);
          return;
        }
      } else {
        // 所有項目跑完後重置
        this.currentIndex = 0;
      }
      setTimeout(this.typeText, this.typingSpeed);
    },
  },
  mounted() {
    this.typeText();
  },
};
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import '../../assets/SCSS/base/variables';
@import 'bootstrap/scss/mixins';

.banner-title {
  position: relative;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 4px dashed $secondary-500;
    padding-bottom: 10px;
  }
}

.banner-title-1::after {
  width: 105%;
}

.banner-title-2::after {
  width: 105%;
}

// banner 右側主圖
.banner-img-home {
  padding: 5px;
  position: relative;
  width: 263px;

  @include media-breakpoint-up(sm) {
    width: 350px;
  }

  @include media-breakpoint-up(lg) {
    width: 486px;
  }
}

.meme-img {
  opacity: 0.3;
  position: absolute;

  // 安妮亞
  &-1 {
    bottom: 65px;
    right: 73px;
    width: 63px;

    @include media-breakpoint-up(md) {
      bottom: 123px;
      right: 144px;
      width: 117px;
    }
  }

  // 蜘蛛人
  &-2 {
    bottom: 103px;
    left: 52px;
    width: 80px;

    @include media-breakpoint-up(md) {
      bottom: 206px;
      left: 105px;
      width: 148px;
    }
  }

  // 大腦
  &-3 {
    top: 90px;
    left: 60px;
    width: 72px;

    @include media-breakpoint-up(md) {
      top: 180px;
      left: 120px;
      width: 133px;
    }
  }

  // oh no
  &-4 {
    top: 55px;
    right: 101px;
    width: 126px;

    @include media-breakpoint-up(md) {
      display: none;
      top: 110px;
      right: 202px;
      width: 200px;
    }

    @include media-breakpoint-up(lg) {
      display: block;
    }
  }

  // 貓打貓
  &-5 {
    bottom: 7px;
    left: 115px;
    width: 75px;

    @include media-breakpoint-up(md) {
      bottom: 14px;
      left: 234px;
      width: 156px;
    }
  }
}

.circle {
  position: absolute;
  border-radius: 50%;
  width: 370px;
  height: 370px;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);

  &-1 {
    background-color: rgba($primary-500, 0.5);
    animation-delay: -3s;
  }

  &-2 {
    background-color: rgba($secondary-600, 0.5);
    animation-delay: -2s;
  }

  &-3 {
    background-color: rgba($primary-300, 0.5);
    animation-delay: -1s;
  }

  &-4 {
    background-color: rgba($secondary-600, 0.5);
    animation-delay: 0s;
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(2, 2);
    opacity: 0;
  }
}
</style>
