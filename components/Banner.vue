<!-- 横幅 -->
<template>
  <div class="relative w-full h-[500px] flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <!-- 背景图片（可选） -->
    <div v-if="backgroundImage" class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>

    <!-- 遮罩层 -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <!-- 文字内容 -->
    <div class="relative z-10 px-6">
      <h1 class="text-4xl font-bold md:text-5xl animate-fade-in">
        {{ title }}
      </h1>
      <p class="mt-4 text-lg opacity-90 md:text-xl">{{ subtitle }}</p>

      <!-- 按钮 -->
      <button @click="$emit('click')" class="mt-6 px-6 py-3 text-lg font-semibold bg-white text-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
<script setup>
  defineProps({
    title: { type: String, default: '欢迎来到我们的官网' },
    subtitle: { type: String, default: '专注高质量服务，为客户创造价值' },
    buttonText: { type: String, default: '了解更多' },
    backgroundImage: { type: String, default: '' }, // 背景图片 URL
  })
</script>
<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
</style>
