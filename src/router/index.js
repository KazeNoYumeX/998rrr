import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue'),
        name: 'HomeView',
      },
      {
        path: 'articles',
        component: () => import('../views/front/ArticlesListView.vue'),
        name: 'ArticlesListView',
      },
      {
        path: 'article/:id',
        component: () => import('../views/front/ArticleView.vue'),
        name: 'ArticleView',
      },
      {
        path: 'products',
        component: () => import('../views/front/ProductsListView.vue'),
        name: 'ProductsListView',
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/ProductView.vue'),
        name: 'ProductView',
      },
      {
        path: 'order',
        component: () => import('../views/front/checkout/OrderView.vue'),
        name: 'OrderView',
      },
      {
        path: 'payment/:orderId',
        component: () => import('../views/front/checkout/PaymentView.vue'),
        name: 'PaymentView',
      },
      {
        path: 'faq',
        component: () => import('../views/front/FaqView.vue'),
        name: 'FaqView',
      },
    ],
  },
  {
    path: '/adminLogin',
    component: () => import('../views/AdminLogin.vue'),
    name: 'AdminLogin',
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    name: 'DashboardView',
    children: [
      {
        path: 'home',
        component: () => import('../views/admin/AdminHome.vue'),
        name: 'AdminHome',
      },
      {
        path: 'products',
        component: () => import('../views/admin/AdminProducts.vue'),
        name: 'AdminProducts',
      },
      {
        path: 'orders',
        component: () => import('../views/admin/AdminOrders.vue'),
        name: 'AdminOrders',
      },
      {
        path: 'articles',
        component: () => import('../views/admin/AdminArticles.vue'),
        name: 'AdminArticles',
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
