<template>
  <!-- md 以下 -->
  <div class="col d-md-none sticky-top">
    <select
      class="form-select border border-primary-500 mb-3"
      v-model="currentCategory"
      @change="getProducts"
    >
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
  <!-- md 以上 -->
  <div class="d-none d-md-block col-3 sticky-top overflow-y-auto vh-100">
    <div class="h-100">
      <ul class="list-group" :class="{ 'mt-20': hasMarginTop }">
        <li
          type="button"
          v-for="category in categories"
          :key="category"
          @click.prevent="changeCategory(category)"
          class="list-group-item list-group-item-action fw-bold products-list-sidebar rounded-1"
          :class="{
            active: category === currentCategory,
          }"
          aria-current="true"
        >
          {{ category }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useProductsStore } from '@/stores/productsStore';

export default {
  data() {
    return {
      hasMarginTop: false,
    };
  },
  methods: {
    ...mapActions(useProductsStore, ['changeCategory', 'getProducts']),
    handleScroll() {
      // 設定顯示 fixed-sidebar class 的閾值，這裡假設滾動到 384px 時啟用
      this.hasMarginTop = window.scrollY > 384;
    },
  },
  computed: {
    ...mapState(useProductsStore, ['categories']),
    ...mapWritableState(useProductsStore, ['currentCategory']),
  },
  mounted() {
    // 監聽滾動距離，執行 handleScroll
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
