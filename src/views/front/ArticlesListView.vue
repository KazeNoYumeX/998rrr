<template>
  <!-- 精選文章 banner -->
  <BannerComponent
    title="精選文章"
    subtitle="Featured Articles"
    image-name="banner-article.webp"
    image-alt="'精選文章"
  />
  <div class="container py-5 py-md-10">
    <div
      v-masonry="containerId"
      transition-duration="0.3s"
      item-selector=".item"
      class="row"
    >
      <div
        v-masonry-tile
        class="item col-sm-6 col-md-4 col-lg-3 mt-4"
        v-for="article in slicedArticles"
        :key="article.id"
      >
        <RouterLink class="text-dark hover-link" :to="`/article/${article.id}`">
          <img
            class="img-fluid rounded-3"
            :src="article.image['600w']"
            alt="首圖"
            :srcset="`${article.image['300w']} 300w, ${article.image['600w']} 600w, ${article.image['1000w']} 1000w`"
          />
          <h2 class="fs-6 fw-bold mt-2">
            {{ article.title }}
          </h2>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useArticleStore } from '@/stores/articleStore';
import BannerComponent from '@/components/BannerComponent.vue';

export default {
  components: {
    BannerComponent,
  },
  data() {
    return {
      pageNum: 1,
      slicedArticles: [],
    };
  },
  computed: {
    ...mapState(useArticleStore, [
      'page',
      'isLoading',
      'fullPage',
      'storedAllArticles',
    ]),
  },
  methods: {
    ...mapActions(useArticleStore, [
      'get10Articles',
      'getAllArticles',
      'getStoredAllArticles',
      'handleArticles',
    ]),
    async onScroll() {
      // 判斷是否還有更多頁面需要加載
      if (this.pageNum > this.page.total_pages) return;

      // 判斷滾動是否到達底部
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // 計算要加載的文章起始索引和結束索引
        const startIndex = (this.pageNum - 1) * 10;
        const endIndex = startIndex + 10;

        // 取出要加載的文章片段並加入到 slicedArticles 中
        const newArticles = this.storedAllArticles.slice(startIndex, endIndex);
        this.slicedArticles.push(...newArticles);

        // 更新頁數
        this.pageNum++;
      }
    },
  },
  async mounted() {
    // 判斷 localStorage 是否有資料，沒有資料才重新發 request 取得所有文章
    await this.handleArticles();

    // 將一開始的前 10 筆資料加入 slicedArticles 中
    this.slicedArticles = this.storedAllArticles.slice(0, 10);
    this.pageNum++;

    // 監聽滑鼠滾動事件
    window.addEventListener('scroll', this.onScroll);
  },
};
</script>
<style lang="scss">
@import '../../assets/SCSS/all.scss';

.item {
  margin-inline: auto;
}

.hover-link:hover {
  h2 {
    color: $primary-500;
  }
}
</style>
