<template>
  <Topbar
    :class="isCollapse ? 'sidebar-collapsed' : null"
    :style="`left:${leftMargin}px`"
    @openDrawer="drawer = true"
    @toggleSidebar="isCollapse = !isCollapse"
  />
  <Sidebar :isCollapse="isCollapse"/>
  <div class="main-wrapper" :style="`padding-left:${leftMargin}px`">
    <slot/>
  </div>
  <el-drawer
    v-model="drawer"
    direction="rtl"
    :modal="false"
    size="20%"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>
<script>
import { ref, computed } from 'vue';

import Sidebar from '@/components/elements/Sidebar.vue';
import Topbar from '@/components/elements/Topbar.vue';

export default {
  setup() {
    const isCollapse = ref(false);
    const drawer = ref(false);

    const leftMargin = computed(() => isCollapse.value ? 64 : 260);

    // provide('setDrawer');

    return { drawer, isCollapse, leftMargin };
  },
  components: {
    Sidebar,
    Topbar,
  }
};
</script>

<style>
  body {
    padding-top: 62px;
    height: calc(100% - 80px);
    margin: 0;
  }
  .main-wrapper {
    transition: 0.25s linear padding;
  }
  .sidebar-toggle-button {
    transition: 0.3s linear transform;
  }
  .sidebar-collapsed .sidebar-toggle-button {
    transform: rotate(180deg);
  }
</style>
