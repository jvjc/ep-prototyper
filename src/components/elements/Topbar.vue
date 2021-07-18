<template>
  <header>
    <el-menu mode="horizontal"
      :router="true"
      background-color="#3c8dbc"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item class="no-mark" @click="$emit('toggleSidebar')">
        <i class="sidebar-toggle-button el-icon-arrow-left"/>
      </el-menu-item>

      <el-menu-item class="no-icon-margin float-right no-mark" @click="$emit('openDrawer')">
        <i class="el-icon-setting"></i>
      </el-menu-item>
      <el-menu-item class="float-right no-mark">
        <el-popover
          placement="bottom"
          :width="200"
          trigger="click"
          v-model:visible="userMenu"
        >
          <template #reference>
            <div @click="userMenu = !userMenu">
              <el-avatar size="small" :src="user.profilePicture" style="margin-right:6px"></el-avatar>
              <span>{{ user.name }}</span>
            </div>
          </template>
          <el-row justify="center">
            <el-col style="text-align:center">
              <el-avatar size="large" :src="user.profilePicture" style="margin-right:6px"></el-avatar>
              <p>{{ user.name }}</p>
              <el-button>Salir</el-button>
            </el-col>
          </el-row>
        </el-popover>
      </el-menu-item>
    </el-menu>
  </header>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const userMenu = ref(false);

    const user = {
      name: 'Juan Víctor Jiménez Corzo',
      profilePicture: 'https://via.placeholder.com/500'
    };

    return { userMenu, user };
  }
};
</script>
<style scoped>
  header {
    transition: 0.3s ease-in-out left;
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 2000;
  }
  .no-icon-margin.el-menu-item [class^=el-icon-] {
    margin-right: 0;
  }
  .float-right {
    float: right !important;
  }
  .el-menu--horizontal > .el-menu-item.no-mark.is-active {
    border-bottom: 0px !important;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    color: inherit;
  }
</style>
