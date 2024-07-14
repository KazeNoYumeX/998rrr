<template>
  <button
    v-if="showBackToTop"
    type="button"
    class="rounded-circle border-0 bg-orange-998-500 bg-gradient text-light button-backtotop"
    style="width: 50px; height: 50px"
    @click="backtotop"
  >
    <i class="fa-solid fa-arrow-up fa-xl"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showBackToTop: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        // Scrolling down and not at the top
        this.showBackToTop = true;
      } else {
        // Scrolling up or at the top
        this.showBackToTop = false;
      }
    },
    backtotop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import '@/assets/SCSS/base/variables';
@import 'bootstrap/scss/mixins';

.button-backtotop {
  position: fixed;
  box-shadow: 0 3px 5px rgba($secondary-500, 0.8);
  bottom: 14px;
  right: 14px;
  z-index: 9999;
}
</style>
