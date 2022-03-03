<template>
  <div class="app-wrapper">
      <ELMenu class="sidebar-container" />
      <div class="main-container">
          <HeaderNav class="header-main" />
          <AppContent class="app-main" />
      </div>
  </div>
</template>

<script>
import AppContent from "./components/ELMenu/AppContent.vue"
import ELMenu from './components/ELMenu/index.vue'
import HeaderNav from './components/ELMenu/HeaderNav.vue'
export default {
  components: {
    AppContent,
    ELMenu,
    HeaderNav
  }
}
</script>

<style lang="less" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar-container {
    -webkit-transition: width 0.28s;
    transition: width 0.28s;
    width: 200px !important;
    background-color: #304156;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    -webkit-box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
    box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
    & > div {
      width: 211px !important;
    }
  }
  .main-container {
    min-height: 100%;
    -webkit-transition: margin-left 0.28s;
    transition: margin-left 0.28s;
    margin-left: 200px;
    position: relative;
  }
  .main-container {
    -webkit-transition: margin-left 0.28s;
    transition: margin-left 0.28s;
    position: fixed;
    width: calc(100vw - 210px);
    top: 50px;
    right: 0;
    bottom: 0;
    left: 0;
    .header-main {
      position: fixed;
      height: 50px;
      width: calc(100% - 200px);
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ddd;
      padding-left: 15px;
      box-sizing: border-box;
    }
    .app-main {
      min-height: 100%;
      width: 100%;
      position: relative;
      overflow: hidden;
    }
  }
}

</style>