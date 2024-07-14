<template>
  <footer class="footer bg-orange-998 py-14">
    <div
      class="container d-flex flex-column flex-md-row justify-content-between align-items-center"
    >
      <div>
        <h1>
          <RouterLink to="/" class="navbar-brand d-block fs-2"
            >玖玖巴</RouterLink
          >
        </h1>
        <p class="text-secondary-500 fs-sm mt-1 d-none d-md-block">
          Copyright © 2024 玖玖巴 All Rights Reserved.
        </p>
      </div>
      <div
        class="d-flex flex-column align-items-center align-items-md-end mt-7 mt-md-0 container"
      >
        <ul class="d-flex flex-column flex-md-row gap-5 list-unstyled">
<!--          <li>-->
<!--            <RouterLink to="/articles" class="nav-link fs-5" aria-current="page"-->
<!--              >精選文章</RouterLink-->
<!--            >-->
<!--          </li>-->
          <li>
            <RouterLink to="/products" class="nav-link fs-5" aria-current="page"
              >限量週邊</RouterLink
            >
          </li>
<!--          <li>-->
<!--            <RouterLink to="/faq" class="nav-link fs-5" aria-current="page"-->
<!--              >常見問答</RouterLink-->
<!--            >-->
<!--          </li>-->
<!--          <li>-->
<!--            <RouterLink to="/adminLogin" class="nav-link fs-5"-->
<!--              >後台管理</RouterLink-->
<!--            >-->
<!--          </li>-->
        </ul>
        <ul class="mt-5 list-unstyled row gx-10 gy-5 justify-content-center">
          <li class="col-5 col-md-3">
            <a
              class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
              href="https://www.twitch.tv/998rrr"
              target="_blank"
              ><i class="fa-brands fa-twitch fs-2"></i>
              <div class="mt-1">Twitch</div></a
            >
          </li>
          <li class="col-5 col-md-3">
            <a
              class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
              href="https://x.com/_998rrr_"
              target="_blank"
              ><i class="fa-brands fa-twitter fs-2"></i
              ><span class="mt-1">Twitter</span></a
            >
          </li>
          <li class="col-5 col-md-3">
            <a
              class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
              href="https://www.youtube.com/@998rrr"
              target="_blank"
              ><i class="fa-brands fa-youtube fs-2"></i>
              <span class="mt-1 text-nowrap">YouTube</span></a
            >
          </li>
          <li class="col-5 col-md-3">
            <a
                class="text-light text-center d-flex flex-column align-items-center hover-primary-500"
                href="https://discord.gg/K3cHZPcUu3"
                target="_blank"
            ><i class="fa-brands fa-discord fs-2"></i>
              <div class="mt-1">Discord</div></a
            >
          </li>
        </ul>
      </div>
      <p class="text-secondary-500 fs-sm mt-10 mt-md-1 d-md-none text-center">
        Copyright © 2020 玖玖巴 All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import '@/assets/SCSS/all.scss';
h1 {
  a {
    font-family: 'Iceberg',serif;
  }
}

.hover-primary-500:hover {
  color: $cyan-998 !important;
}

.navbar-brand,
.nav-link {
  color: $light !important;

  &:hover {
    color: $teal-998 !important;
  }
}

.nav-link {
  text-align: center;
  padding: 0;
}
</style>
