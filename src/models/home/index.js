import { observable, action } from 'mobx';

export class HomeInfo {
  @observable name = '云课堂';

  @action
  updateName = (params) => {
    this.name = params;
  }
}

export default new HomeInfo();
