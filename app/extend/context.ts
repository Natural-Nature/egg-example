const ctx: any = {
  get isIOS(): boolean {
    const iosReg = /iphone|ipad|ipod/i;
    return iosReg.test(this.get("user-agent"));
  },
  get isAndroid(): boolean {
    const androidReg = /Android/i;
    return androidReg.test(this.get("user-agent"));
  },
};

export default ctx;
