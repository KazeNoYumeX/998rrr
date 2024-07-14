import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export const useArticleStore = defineStore('useArticleStore', {
  state: () => ({
    articles: [],
    page: {},
    allArticles: [],
    storedAllArticles: [],
    // loading Status
    isLoading: false,
    fullPage: true,
  }),
  actions: {
    // 判斷 localStorage 是否有資料
    async handleArticles() {
      if (this.storedAllArticles.length === 0) {
        // 取得頁數
        await this.get10Articles();

        await this.getAllArticles();
      }
      this.getStoredAllArticles();
    },
    async get10Articles(page = 1) {
      this.isLoading = true;

      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/articles?page=${page}`;

      try {
        const res = await axios.get(url);
        this.articles = res.data.articles;
        this.page = res.data.pagination;

        // allArticles
        this.allArticles.push(...this.articles);
      } catch (err) {
        console.error(err.response.data.message);
      }

      this.isLoading = false;
    },
    async getAllArticles() {
      // 清空
      this.allArticles = [];

      for (let i = 1; i <= this.page.total_pages; i++) {
        await this.get10Articles(i);
      }

      // 所有文章存入 localStorage
      localStorage.setItem('allArticles', JSON.stringify(this.allArticles));
    },
    getStoredAllArticles() {
      const storedValue = localStorage.getItem('allArticles');
      this.storedAllArticles = JSON.parse(storedValue) || [];
    },
  },
});
