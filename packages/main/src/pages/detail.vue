<script lang="ts" setup>
import { useRouter } from 'vue-router'
import shared from '@/shared'

const router = useRouter()
const sharedStore = shared.getStore() // useSharedStore()

function goBack() {
  router.back()
}
function happyBirthDay() {
  sharedStore.setUserInfo({ age: sharedStore.userInfo.age + 1 })
}
</script>

<template>
  <h1 class="title">
    Hello, I'm {{ sharedStore.userInfo.name }}, {{ sharedStore.userInfo.age }} years old
  </h1>
  <a-button @click="happyBirthDay">Happy BirthDay</a-button>
  <a-button @click="goBack">Back</a-button>
</template>

<style lang="scss" scoped>
.title {
  font-size: 32px;
  font-weight: bold;
  line-height: 100px;
}

.user-info {
  margin: 20px auto;
  font-weight: bold;
  color: green;
}
</style>
