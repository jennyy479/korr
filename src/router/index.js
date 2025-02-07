import { createRouter, createWebHistory } from 'vue-router';

// 定義路由對應的組件
const routes = [
  {
    path: '/index',
    name: 'Home',
    component: () => import('../views/HomeView.vue'), // 動態載入 HomeView
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import('../views/QuestionsView.vue'),
  },
  {
    path: '/teach',
    name: 'Teach',
    component: () => import('../views/TeachView.vue'),
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/ResultView.vue'),
  },
  {
    path: '/recipelist',
    name: 'Recipelist',
    component: () => import('../views/RecipeListView.vue'),
  },
];

// 創建路由實例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 模式
  routes,
});

export default router;
