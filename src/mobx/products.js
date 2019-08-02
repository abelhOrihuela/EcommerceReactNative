import { observable, action } from 'mobx';
import axios from 'axios';

class ProductsStore {
  @observable list = []

  async load() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    this.set(data);
  }

  @action
  set(list = []) {
    this.list = list;
  }

  @action
  get() {
    return this.list;
  }

  @action
  add(order) {
    this.list.push(order);
  }

}

export default new ProductsStore();
