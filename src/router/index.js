import { createRouter, createWebHistory } from 'vue-router';

// 定義路由對應的組件
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'), // 動態載入 HomeView
  },
];

// 創建路由實例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 模式
  routes,
});

export default router;
