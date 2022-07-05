<script lang="ts" setup name="Layout">
import AppTopNav from '@/views/layout/components/app-top-nav.vue'
import AppHeader from '@/views/layout/components/app-header.vue'
import AppFooter from '@/views/layout/components/app-footer.vue'
</script>
<template>
  <AppTopNav></AppTopNav>
  <AppHeader></AppHeader>
  <main></main>
  <AppFooter></AppFooter>
</template>

<style lang="less" scoped></style>
