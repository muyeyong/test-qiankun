<script setup lang="ts">
import { ref } from 'vue'
import useSharedStore from '../store/shared'
const sharedStore = useSharedStore()
const newName = ref<string | undefined>(sharedStore.userInfo.name)
const happyBirthDay = () => {
  sharedStore.setUserInfo({ age: (sharedStore.userInfo.age || 0) + 1 })
}
const submitNewName = function () {
  sharedStore.setUserInfo({ name: newName })
}

defineProps<{ msg: string }>()
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <p>I'm {{ sharedStore.userInfo.name }}, {{ sharedStore.userInfo.age }} years old</p>
    <button type="button" @click="happyBirthDay">Happy BirthDay</button>
    <input v-model="newName" type="text" /><button @click="submitNewName">提交新名字</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
