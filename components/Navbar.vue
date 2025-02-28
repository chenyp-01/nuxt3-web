<!-- 导航 -->
<template>
  <nav class="bg-white shadow-md p-4 flex justify-between items-center">
    <NuxtLink to="/" class="text-xl font-bold text-blue-600">xxx公司</NuxtLink>
    <div class="flex justify-end items-center">
      <div>
        <NuxtLink to="/" class="mx-3">首页</NuxtLink>
      </div>
      <div v-if="isEntryGridPage" class="flex space-x-6">
        <NavLink to="/products" :is-active="isActive('/products')"> 政府引导 </NavLink>
        <NavLink to="/property" :is-active="isActive('/property')"> 资产登记 </NavLink>
        <NavLink to="/transaction" :is-active="isActive('/transaction')"> 数据交易 </NavLink>
        <NavLink to="/ecology" :is-active="isActive('/ecology')"> 生态共赢 </NavLink>
      </div>
      <div>
        <NuxtLink to="/about" class="mx-3">关于我们</NuxtLink>
        <NuxtLink to="/contact" class="mx-3">4008-218-xxx</NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import NavLink from './NavLink.vue'
  const isEntryGridPage = ref(false)
  const route = useRoute()
  // 定义一个路径数组，用于判断哪些路径需要显示入口模块
  const entryPaths = ['/products', '/property', '/transaction', '/ecology']
  watch(route, newRoute => {
    // 判断当前路径是否在 entryPaths 数组中
    isEntryGridPage.value = entryPaths.includes(newRoute.path)
  })
  // 或者直接在初始化时通过路由判断
  if (entryPaths.includes(route.path)) {
    isEntryGridPage.value = true
  }

  // 判断当前路由是否匹配某个链接
  const isActive = link => {
    return route.path === link
  }
</script>
