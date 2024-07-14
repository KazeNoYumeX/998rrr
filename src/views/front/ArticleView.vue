<template>
  <div class="container py-10 py-md-20">
    <div class="row">
      <div class="col-md-8">
        <div v-if="!isLoading">
          <h1 class="fs-3 fw-bold">{{ article.title }}</h1>
          <div class="mt-4">
            <span class="text-secondary-300"
              ><i class="fa-solid fa-user me-1"></i>{{ article.author }}</span
            >
            <span class="text-secondary-300 ms-3"
              ><i class="fa-solid fa-calendar-days me-1"></i
              >{{ getDate(article.create_at) }}</span
            >
            <span
              class="text-secondary-300 ms-3"
              v-for="tag in article.tag"
              :key="tag"
              ><i class="fa-solid fa-tag me-1"></i>{{ tag }}</span
            >
          </div>
          <div v-if="article.image && Object.keys(article.image).length > 0">
            <img
              class="mt-4 w-100 rounded-3"
              :src="article.image['1000w']"
              alt="首圖"
              :srcset="`${article.image['300w']} 300w, ${article.image['600w']} 600w, ${article.image['1000w']} 1000w`"
            />
          </div>
          <div class="mt-4 p-6" v-html="article.content"></div>
          <hr />
          <div class="row justify-content-between">
            <div class="col-6">
              <RouterLink
                :to="`/article/${storedAllArticles[currentIndex - 1].id}`"
                class="d-flex align-items-center"
                v-if="storedAllArticles[currentIndex - 1]"
              >
                <i class="fa-solid fa-arrow-left me-2"></i>
                <div>
                  上一篇：<br />
                  {{ storedAllArticles[currentIndex - 1].title }}
                </div>
              </RouterLink>
            </div>
            <div class="col-6" v-if="storedAllArticles[currentIndex + 1]">
              <RouterLink
                :to="`/article/${storedAllArticles[currentIndex + 1].id}`"
                class="d-flex align-items-center justify-content-end"
              >
                <div class="text-end">
                  下一篇：<br />
                  {{ storedAllArticles[currentIndex + 1].title }}
                </div>
                <i class="fa-solid fa-arrow-right ms-2"></i>
              </RouterLink>
            </div>
          </div>
        </div>
        <!-- loading -->
        <div v-else class="vl-parent">
          <VueLoading
            v-model:active="isLoading"
            :can-cancel="false"
            :is-full-page="fullPage"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div
          class="ps-lg-20 pt-lg-10 d-flex flex-column align-items-center align-items-md-start d-none d-md-block"
        >
          <h2 class="fs-5 fw-bold mt-10 mt-md-0">標籤</h2>
          <div class="mt-4">
            <a class="text-secondary-700 me-3" v-for="tag in allTags" :key="tag"
              ><i class="fa-solid fa-tag"></i>{{ tag }}</a
            >
          </div>
          <h2 class="fs-5 fw-bold mt-10">隨機文章</h2>
          <div v-for="article in randomArticles" :key="article.id" class="mt-2">
            <RouterLink :to="`/article/${article.id}`" class="fw-bold">{{
              article.title
            }}</RouterLink>
          </div>

          <!-- 業配 -->
<!--          <a-->
<!--            class="mt-10"-->
<!--            href="https://www.snowfactory.com.tw/pages/confiture"-->
<!--            target="_blank"-->
<!--            ><img-->
<!--              class="img-fluid"-->
<!--              src="../../assets/images/products/banner-article.webp"-->
<!--              alt="法式手工果醬"-->
<!--          /></a>-->

          <!-- 社群連結 -->
          <ul class="mt-10 row">
            <li class="col-3">
              <a
                href="https://podcasts.apple.com/tw/podcast/dr-meme/id1522408497"
                target="_blank"
                ><i class="fa-solid fa-podcast fs-2"></i>
              </a>
            </li>
            <li class="col-3">
              <a
                href="https://open.spotify.com/show/4gm4BSePy7Xoi08Nd8KH87"
                target="_blank"
                ><i class="fa-brands fa-spotify fs-2"></i
              ></a>
            </li>
            <li class="col-3">
              <a href="https://www.instagram.com/doctormeme_tw/" target="_blank"
                ><i class="fa-brands fa-instagram fs-2"></i
              ></a>
            </li>
            <li class="col-3">
              <a
                href="https://www.instagram.com/memedical_slashie/"
                target="_blank"
                ><i class="fa-brands fa-instagram fs-2"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getDate from '@/mixins/getDate.js';

import { mapState, mapActions } from 'pinia';
import { useArticleStore } from '@/stores/articleStore';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      currentIndex: 0,
      article: {},
      randomArticles: [],

      // loadingStatus
      isLoading: false,
      fullPage: false,
    };
  },
  mixins: [getDate],
  methods: {
    ...mapActions(useArticleStore, [
      'get10Articles',
      'getStoredAllArticles',
      'handleArticles',
    ]),
    findIndex() {
      this.currentIndex = this.storedAllArticles.findIndex(
        (item) => item.id === this.article.id
      );
    },
    async getArticle() {
      this.isLoading = true;
      const { id } = this.$route.params;

      try {
        const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/article/${id}`;
        const response = await this.$http.get(url);
        this.article = response.data.article;

        this.findIndex();
      } catch (error) {
        console.error('Error fetching article:', error);
      }

      this.isLoading = false;
    },
    getRandomArticles() {
      // 生成 5 個不重複的隨機索引
      const randomIndexes = [];
      while (randomIndexes.length < 5) {
        const randomIndex = Math.floor(
          Math.random() * this.storedAllArticles.length
        );
        // 判斷是否已有該 index
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }

      // 根據隨機 index 從 storedAllArticles 中取出對應文章
      this.randomArticles = randomIndexes.map(
        (index) => this.storedAllArticles[index]
      );
    },
  },
  computed: {
    ...mapState(useArticleStore, ['articles', 'storedAllArticles']),
    allTags() {
      const tags = {};
      this.storedAllArticles.forEach((article) => {
        article.tag.forEach((tag) => {
          if (tags[tag]) {
            tags[tag]++;
          } else {
            tags[tag] = 1;
          }
        });
      });

      const top20Keys = Object.keys(tags)
        .sort((a, b) => tags[b] - tags[a])
        .slice(0, 20);

      return top20Keys;
    },
  },
  // 最新文章監聽 url 切換
  watch: {
    '$route.params': {
      immediate: true, // 初始化完成後，就先觸發
      async handler() {
        // 放入我們需要處理的程序
        if (this.$route.params.id) {
          this.getArticle();
        }
      },
    },
  },
  async mounted() {
    // 取得該篇文章
    await this.getArticle();

    // 確認取得所有文章，存進 localStorage
    await this.handleArticles();

    this.getRandomArticles();
  },
};
</script>
<style>
.vl-parent {
  height: 300px;
}
</style>
