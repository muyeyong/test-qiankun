class Shared {
  public getUserInfo(): any {
    console.log('getUserInfo')
  }
  public setUserInfo(info: any): any {
    console.log('setUserInfo', info)
  }
}

class SharedModule {
  static shared = new Shared()

  static overloadShared(shared: any) {
    SharedModule.shared = shared
  }

  static getShared() {
    return SharedModule.shared
  }
}

export default SharedModule
