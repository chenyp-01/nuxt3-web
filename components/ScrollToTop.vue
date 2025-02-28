<!-- 置顶 -->
<template>
  <div v-if="isVisible" class="fixed bottom-4 right-4 w-14 h-14 bg-[#21337B] text-white rounded-lg flex flex-col items-center justify-center cursor-pointer border-transparent hover:border hover:border-blue-500 transition-all" @click="scrollToTop">
    <svg t="1740630291335" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1463" width="23" height="23">
      <path d="M533.333333 358.4v516.266667h-42.666666V358.4l-140.8 140.8-29.866667-29.866667L512 277.333333l192 192-29.866667 29.866667-140.8-140.8z m213.333334-123.733333h-469.333334v-42.666667h469.333334v42.666667z" fill="#ffffff" p-id="1464"></path>
    </svg>
    <!-- 置顶文字 -->
    <span class="text-xs mt-1">置顶</span>
  </div>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  // 用于控制回到顶部按钮的显示与隐藏
  const isVisible = ref(false)
  // 监听滚动事件，判断是否显示按钮
  const handleScroll = () => {
    if (window.scrollY > 200) {
      // 如果滚动超过200px，显示按钮
      isVisible.value = true
    } else {
      isVisible.value = false
    }
  }
  // 点击按钮时平滑滚动到页面顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滚动
    })
  }
  // 在组件挂载后添加滚动监听
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  // 在组件卸载前移除滚动监听
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style scoped>
  /* 这里可以添加额外的样式调整 */
</style>
