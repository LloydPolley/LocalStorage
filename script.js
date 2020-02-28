class Store {
  constructor() {
    this.enabled = this.isEnabled();
  }
  isEnabled() {
    var test = "test";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
  get(item) {
    let data = window.localStorage.getItem(item);
    return data === null ? undefined :  JSON.parse(data)
  }
  set(itemName, obj) {
    window.localStorage.setItem(itemName, JSON.stringify(obj));
  }
  remove(item) {
    window.localStorage.removeItem(item);
  }
}

const store = new Store();
if (store.enabled) {
  const item = store.get("pants");
  console.log(item);
  if (!item) {
    store.set("pants", { pants: "pants" });
  } else {
    store.remove("pants");
  }
}
