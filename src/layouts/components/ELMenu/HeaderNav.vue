<template>
  <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(route, index) in breadcrumbItems" :key="index">
          <router-link v-if="route.path" :to="route.path">
          <i :class="route.meta.icon"></i>
          <span>{{ route.meta.title }}</span>
          </router-link>
        </el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breadcrumbItems: []
    }
  },
  mounted () {
    this.getBreadcrumbItems(this.$route);
  },
  methods: {
    getBreadcrumbItems(route) {
      let categories = route.matched.splice(1);
      if (categories.length > 0){
        this.breadcrumbItems = categories
        //  if (this.breadcrumbItems[0].meta.title !== '首页'){
        if (route.path !== '/home') {   
          let temp = {path: '/', meta: {title:'首页', icon: "el-icon-loaction"}}
          this.breadcrumbItems.unshift(temp)
        }         
      }      
    }
  },
  watch: {
    $route: function (newVal) {
      this.getBreadcrumbItems(newVal)
    }
  }
}
</script>

<style>

</style>