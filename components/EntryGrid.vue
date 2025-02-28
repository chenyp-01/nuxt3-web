<!-- 响应式入口模块 -->
<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
    <div v-for="(item, index) in items" :key="index" class="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:scale-105 transition-transform cursor-pointer" @click="goTo(item.link)">
      <img v-if="item.icon" :src="item.icon" alt="icon" class="w-16 h-16 mb-2.5" />
      <h3 class="text-lg font-semibold">{{ item.title }}</h3>
      <p class="text-[16px] !mt-4">{{ item.content }}</p>
    </div>
  </div>
</template>
<script setup>
  import { useRouter } from 'vue-router'

  defineProps({
    items: {
      type: Array,
      default: () => [
        { title: '产品中心', icon: '/images/icon1.png', link: '/products', content: '' },
        { title: '解决方案', icon: '/images/icon2.png', link: '/solutions', content: '' },
        { title: '关于我们', icon: '/images/icon3.png', link: '/about', content: '' },
        { title: '联系我们', icon: '/images/icon4.png', link: '/contact', content: '' },
      ],
    },
  })

  const router = useRouter()
  const goTo = link => {
    if (link) router.push(link)
  }
</script>
<style>
  /* 可选的额外样式 */
</style>
