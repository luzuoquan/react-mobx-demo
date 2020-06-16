/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

@inject('homeInfo')
@observer
export default class Home extends Component {
  static propTypes = {
    homeInfo: PropTypes.objectOf(PropTypes.object),
  }

  static defaultProps = {
    homeInfo: {},
  }

  handleClick = () => {
    const { homeInfo: { updateName } } = this.props;
    updateName('Mobx 接入 - 云课堂');
  }

  render() {
    const { homeInfo: { name } } = this.props;
    return (
      <div className="mobx">
        <p>{name}</p>
        <button type="button" onClick={this.handleClick}>更改</button>
      </div>
    );
  }
}
