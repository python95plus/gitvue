<template>
  <div>
      <router-link tag="span" :to="resolvePath()" v-if="!item.children">
          <el-menu-item :index="resolvePath()">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
      </router-link>
      <el-submenu :index="resolvePath()" v-else>
          <template slot="title">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{ item.meta.title }}</span>
          </template>
          <!-- 使用menu-item标签也可以 -->
          <MenuItem v-for="(route, index) in item.children" :key="index" :item="route" :fatherPath="resolvePath(route.path)"></MenuItem>
      </el-submenu>
  </div>
</template>

<script>
import path from "path"
export default {
  name: 'MenuItem',
  props: {
    item: {
        type: Object,
        default: null
    },
    fatherPath: {
        type: String,
        default: ''
    }
  },
  data () {
      return {}
  },
  methods: {
      resolvePath (routePath='') {
          return path.resolve(this.fatherPath, routePath)
      }
  }
}
</script>

<style>

</style>