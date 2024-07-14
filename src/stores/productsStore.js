import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export const useProductsStore = defineStore('productsStore', {
  state: () => ({
    isFirstLoad: true,
    products: [],
    allProducts: [],
    categories: ['全部商品'],
    currentCategory: '全部商品',
    pageNum: 1,
    pagination: {},
    followList: [],
    recommendProducts: [],
    // loadingStatus
    isLoading: false,
    fullPage: true,
  }),
  actions: {
    // 取得商品
    async getProducts(pageNum = 1) {
      this.isLoading = true;
      this.pageNum = pageNum;
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products?page=${
        this.pageNum
      }&category=${
        this.currentCategory === '全部商品' ? '' : this.currentCategory
      }`;

      try {
        const res = await axios.get(url);
        this.products = res.data.products;
        this.pagination = res.data.pagination;
        this.recommendProducts = this.products.slice(0, 3);

        // 跳轉到產品區塊最上方
        // 判斷是否為第一次載入，第一次載入 "不會" 執行 scrollToProductsBlock
        if (!this.isFirstLoad) {
          this.scrollToProductsBlock();
        } else {
          // 第一次加載後，將 isFirstLoad 設為 false
          this.isFirstLoad = false;
        }
      } catch (err) {
        alert(err.data.message);
      }

      this.isLoading = false;
    },
    async getAllProducts() {
      // this.isLoading = true;

      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`;

      try {
        const res = await axios.get(url);
        this.allProducts = res.data.products;
      } catch (err) {
        console.log(err.response.data.message);
      }

      // this.isLoading = false;
    },
    // 跳轉到產品區塊最上方
    scrollToProductsBlock() {
      const targetBlock = document.querySelector('#products-block');

      if (targetBlock) {
        targetBlock.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },

    // 更新目前選擇類別
    changeCategory(category) {
      // 不相等才需要賦予新的值
      if (this.currentCategory !== category) {
        this.currentCategory = category;
        this.getProducts();
      }
    },

    // 切換收藏狀態 (愛心)
    toggleFollowProduct(id) {
      if (this.followList.includes(id)) {
        const followIndex = this.followList.indexOf(id);
        this.followList.splice(followIndex, 1);
      } else {
        this.followList.push(id);
      }
      localStorage.setItem('followList', JSON.stringify(this.followList));
    },

    // 取得收藏列表
    getFollowList() {
      const storedValue = localStorage.getItem('followList');
      this.followList = JSON.parse(storedValue) || [];
    },
  },
});
