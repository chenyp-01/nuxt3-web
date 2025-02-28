<!-- 首页 -->
<template>
  <header>
    <Banner title="打造卓越网站" subtitle="我们提供高质量的前端解决方案" buttonText="开始探索" backgroundImage="/images/banner.png" @click="goToAbout" />
  </header>
  <section>
    <EntryGrid
      :items="[
        { title: '政府引导', icon: '/images/demo1.png', link: '/products', content: '结合国标和行业标准,为政府和企业提供数据管理顶层规划、数据治理、DCMM认证、数据资产入表、数据资产融资等服务' },
        { title: '资产登记', icon: '/images/demo1.png', link: '/solutions', content: '为政府和企业客户提供数据要素管理平台、可信数据空间等软件产品,助力政府和企业管理运营核心数据资产' },
        { title: '数据交易', icon: '/images/demo1.png', link: '/about', content: '通过安全可信的数据空间技术实现数据流通。助力企业通过数据驱动业务效能提升' },
        { title: '生态共赢', icon: '/images/demo1.png', link: '/contact', content: '运用AI技术,开发行业级机器学习模型,提供交通、金融、医药、机器人、低空等行业模型服务，推动企业技术革新' },
      ]"
    ></EntryGrid>
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
