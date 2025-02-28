<!-- 生态共赢 -->
<template>
  <header>
    <Banner title="打造卓越网站" subtitle="我们提供高质量的前端解决方案" buttonText="开始探索" backgroundImage="/images/banner.png" @click="goToAbout" />
  </header>
  <section>
    <div class="content">
      <div class="content-list gray">
        <div class="news">
          <h1>数据要素统一大市场构建思路</h1>
          <img src="/public/images/demo2.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <aside>
    <ScrollToTop />
  </aside>
</template>
<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goToAbout = () => {
    router.push('/about')
  }
</script>
<style lang="less" scoped></style>
