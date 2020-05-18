/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('globalInfo')
@observer
export default class Home extends Component {
  handleUpdateName = () => {
    const { globalInfo: { updateName } } = this.props;
    updateName('云课堂 Mobx 实例');
  }

  render() {
    const {
      globalInfo: { title },
    } = this.props;

    return (
      <div className="mobx">
        <p>{title}</p>
        <button
          type="button"
          onClick={this.handleUpdateName}
        >
          更改
        </button>
      </div>
    );
  }
}
