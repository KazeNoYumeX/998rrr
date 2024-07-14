<template>
  <nav class="navbar navbar-expand-lg bg-orange-998-500 fixed-top">
    <div class="container d-flex justify-content-between align-items-center">
      <h1>
        <RouterLink to="/" class="navbar-brand d-block">玖玖巴</RouterLink>
      </h1>
      <div>
        <input type="checkbox" id="menu-toggle" ref="menutoggle" />
        <label
          for="menu-toggle"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-hamburger"></span>
        </label>
      </div>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav my-10 my-lg-0 ms-auto d-flex align-items-center">
<!--          <li class="nav-item">-->
<!--            <RouterLink-->
<!--              to="/articles"-->
<!--              class="nav-link fs-5 fw-bold py-3"-->
<!--              aria-current="page"-->
<!--              >精選文章</RouterLink-->
<!--            >-->
<!--          </li>-->
          <li class="nav-item">
            <RouterLink
              to="/products"
              class="nav-link fs-5 fw-bold py-3"
              aria-current="page"
              >限量週邊</RouterLink
            >
          </li>
<!--          <li class="nav-item">-->
<!--            <RouterLink-->
<!--              to="/faq"-->
<!--              class="nav-link fs-5 fw-bold py-3"-->
<!--              aria-current="page"-->
<!--              >常見問答</RouterLink-->
<!--            >-->
<!--          </li>-->
          <li class="nav-item">
            <a
              class="btn btn-follow fs-5 fw-bold py-3"
              aria-current="page"
              href="https://www.twitch.tv/998rrr"
              target="_blank"
              >追隨頻道</a
            >
          </li>
<!--          <li v-show="!isFollowBtnVisible" class="nav-item">-->
<!--            <RouterLink-->
<!--              to="/followlist"-->
<!--              class="nav-link fs-5 fw-bold py-3"-->
<!--              aria-current="page"-->
<!--              ><i-->
<!--                class="fa-solid fa-heart"-->
<!--                :class="{ 'text-orange-998-500': followList.length > 0 }"-->
<!--              ></i-->
<!--            ></RouterLink>-->
<!--          </li>-->
<!--          <li v-show="!isFollowBtnVisible" class="nav-item">-->
<!--            <RouterLink-->
<!--              to="/cart"-->
<!--              class="nav-link fs-5 fw-bold py-3 position-relative"-->
<!--              aria-current="page"-->
<!--              ><i class="fa-solid fa-cart-shopping"></i-->
<!--              ><span-->
<!--                v-if="carts.length > 0"-->
<!--                class="position-absolute top-25 start-75 translate-middle badge rounded-pill p-1 bg-primary-400 text-dark fs-8"-->
<!--                >{{ carts.length }}-->
<!--                <span class="visually-hidden">unread messages</span></span-->
<!--              ></RouterLink-->
<!--            >-->
<!--          </li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { useCartStore } from '@/stores/cartStore';
import { useProductsStore } from '@/stores/productsStore';
import { mapActions, mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useCartStore, ['carts']),
    ...mapState(useProductsStore, ['followList']),
    isFollowBtnVisible() {
      return !(
        this.$route.path.startsWith('/product') ||
        this.$route.path === '/cart' ||
        this.$route.path === '/followlist' ||
        this.$route.path === '/order' ||
        this.$route.path === '/checkout' ||
        this.$route.path === '/payment'
      );
    },
  },
  methods: {
    ...mapActions(useCartStore, ['getCarts']),
    navbarCollapse() {
      const navLink = document.querySelectorAll('.nav-link');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const checkbox = this.$refs.menutoggle;

      navLink.forEach((item) => {
        item.addEventListener('click', () => {
          navbarCollapse.classList.remove('show');
          checkbox.checked = false;
        });
      });
    },
  },
  mounted() {
    this.getCarts();
    this.navbarCollapse();
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/SCSS/all.scss';

.nav-link {
  color: $light !important;

  &:hover {
    color: $primary-500 !important;
  }
}

.navbar-brand,
.nav-link {
  color: $light !important;
  font-family: 'Iceberg',sans-serif;

  &:hover {
    color: $teal-998 !important;
  }
}

// 漢堡選單
.navbar-toggler {
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &-hamburger,
  &-hamburger::before,
  &-hamburger::after {
    background-image: none;
    display: block;
    content: '';
    background-color: $secondary-100;
    position: absolute;
    height: 2px;
    width: 30px;
    border-radius: 4px;
    transition: transform 0.5s ease-in-out, background-color 0.5s ease-in;
  }

  &-hamburger {
    transform-origin: 8px 0;

    &::before {
      margin-top: -8px;
      transform-origin: 0 0;
    }

    &::after {
      margin-top: 8px;
      transform-origin: 0% 100%;
    }
  }

  &:hover {
    border: 1px solid $dark;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
}

#menu-toggle {
  display: none;

  &:checked {
    + .navbar-toggler {
      .navbar-toggler-hamburger {
        background-color: $dark;

        &::before {
          transform: rotate(45deg) translate(3px, -6px);
        }

        &::after {
          transform: rotate(-45deg) translate(3px, 6px);
        }
      }
    }
  }
}

.navbar-nav {
  display: flex;
  gap: 0;
  row-gap: 10px;
  @include media-breakpoint-up(lg) {
    gap: 0;
    column-gap: 36px;
  }
}

.nav-link {
  text-align: center;
  padding: 0;
}

.btn-follow {
  color: $light;
  display: block;
  padding: 12px 56px;
  border: 1px solid $light;
  background-color: transparent;
  background-image: url('../assets/images/background/button-bg.webp');
  background-repeat: repeat-x;
  background-position: 0 -100%;
  transition: 1.3s ease;

  &:hover {
    color: $light;
    background-position: center;
  }
}

.fs-8 {
  font-size: 14px;
}
</style>
