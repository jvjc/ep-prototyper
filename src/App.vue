<template>
  <Layout>
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </Layout>
</template>
<script>
import Layout from '@/components/layouts/Default.vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    console.log(route.meta?.layout);
  },
  components: {
    Layout
  }
};
</script>
<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
