import { observable, action } from 'mobx';

export class GlobalInfo {
  @observable title = '云课堂';

  @action
  updateName = (params) => {
    this.title = params;
  }
}

export default new GlobalInfo();
