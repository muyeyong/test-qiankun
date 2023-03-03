import { defineStore } from 'pinia'
import { ref } from 'vue'

const useSharedStore = defineStore('sharedStore', () => {
  const userInfo = ref({ name: '马大姐', sex: 'female', age: 18 })
  const setUserInfo = (info: any) => {
    userInfo.value = { ...userInfo.value, ...info }
  }
  return { userInfo, setUserInfo }
})

export default useSharedStore
