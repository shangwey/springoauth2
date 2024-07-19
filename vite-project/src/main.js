import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import HelloView from './views/HelloView.vue';
import LoginView from './views/LoginView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/hello', component: HelloView },
  { path: '/login', component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
