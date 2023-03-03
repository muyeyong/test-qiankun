<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <img alt="Vue logo" src="@/assets/images/logo.png" class="w-30" />
  <a-button @click="router.push('detail')">Detail</a-button>
</template>

<style lang="scss"></style>
