<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/hello">Hello</router-link>
    <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
    <button v-if="isAuthenticated" @click="logout">Logout</button>
    <router-view />
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const isAuthenticated = ref(false);

    const logout = async () => {
      try {
        await axios.post('/api/logout');
        isAuthenticated.value = false;
      } catch (error) {
        console.error('Logout failed', error);
      }
    };

    return {
      isAuthenticated,
      logout,
    };
  },
};
</script>
