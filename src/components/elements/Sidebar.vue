<template>
  <el-menu
    class="el-menu-vertical"
    :collapse="isCollapsed"
    :router="true"
    background-color="#222d32"
    text-color="white"
    active-text-color="#ffd04b"
    style="position: fixed; top: 0px; height: 100%; z-index: 2001"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <el-menu-item index="/" style="max-width:260px;">
      <img v-if="isCollapsed" style="max-width:100%;" src="@/assets/logo_mobile.png" alt="logo">
      <img v-else style="max-width:100%;" src="@/assets/logo_desktop.png" alt="logo">
    </el-menu-item>
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { ref, computed } from 'vue';

export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const isHover = ref(false);
    const isCollapsed = computed(() => {
      return props.isCollapse && !isHover.value;
    });

    return { isCollapsed, isHover };
  }
};
</script>
<style scoped>
  .el-menu-vertical {
    border-right: 0;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 260px;
  }
</style>>
