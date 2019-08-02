import { observable } from 'mobx';


class OrdersStore {
  @observable list = []

  set(list = []) {
    this.list = list;
  }

  get() {
    return this.list;
  }

  add(order) {
    this.list.push(order);
  }
}

export default new OrdersStore();
