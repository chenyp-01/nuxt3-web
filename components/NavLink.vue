<!-- 点击高亮 -->
<template>
  <NuxtLink
    :to="to"
    class="mx-3"
    :class="{
      'text-blue-600 font-semibold': isActive,
      'text-[#333333]': !isActive,
    }"
    @click="handleClick"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  // 接收 props
  const props = defineProps({
    to: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  })

  // 定义事件
  const emit = defineEmits(['setActive'])

  // 触发父组件更新活动链接
  const handleClick = () => {
    emit('setActive', props.to)
  }
</script>

<style scoped>
  /* 高亮状态的样式 */
  .text-blue-600 {
    color: #2563eb;
  }

  .font-semibold {
    font-weight: 600;
  }
</style>
