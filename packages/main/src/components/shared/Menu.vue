<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { DesktopOutlined } from '@ant-design/icons-vue'
// import AppLink from './Link.vue';

const route = useRoute()

const activeIndex = computed(() => {
  return route.path
})

// get app list config from window.__MICRO_APPS__
const appList = ref<IMicroApp[]>(window.__MICRO_APPS__ || [])
</script>
<template>
  <a-menu :default-active="activeIndex" :router="true">
    <!-- <a-menu-item index="/" name="home">
            <DesktopOutlined />
            <span>Home</span>
        </a-menu-item> -->
    <a-menu-item v-for="item in appList" :key="item.name">
      <a :href="item.activeRule" rel="noopener noreferrer">{{ item.name }}</a>
    </a-menu-item>
  </a-menu>
</template>
<style lang="scss">
.menu-list {
  background: none;
  width: 130px;
  margin-left: 20px;

  .menu-item {
    width: 100px;
  }
}
</style>
