import { defineStore } from 'pinia'
import { ref } from 'vue'
import shared from '../shared'

const useSharedStore = defineStore('shared', () => {
  const userInfo = ref<{ age?: number; name?: string; sex?: string }>({})
  function init() {
    const initState = shared.getShared().getUserInfo()
    setUserInfo(initState)
  }
  function setUserInfo(value: any) {
    userInfo.value = { ...userInfo.value, ...value }
    shared.getShared().setUserInfo(userInfo.value)
  }
  return { userInfo, init, setUserInfo }
})

export default useSharedStore
