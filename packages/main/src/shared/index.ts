import useSharedStore from '@/store/shared'

class Shared {
  public store: any = null
  public initStore() {
    if (this.store) return
    const store = useSharedStore()
    this.store = store
  }
  getUserInfo() {
    if (this.store === null) this.initStore()
    return this.store.userInfo || {}
  }
  setUserInfo(info: any) {
    if (this.store === null) this.initStore()
    this.store.setUserInfo(info)
  }
  getStore() {
    return this.store
  }
}

const shared = new Shared()
export default shared
