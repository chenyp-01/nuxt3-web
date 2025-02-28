<!-- 布局（layout）组件 -->
<template>
  <div>
    <Navbar></Navbar>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>
<script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
</script>
