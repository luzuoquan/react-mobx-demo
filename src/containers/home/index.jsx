import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

@inject('homeInfo')
@observer
export default class Home extends Component {
  render() {
    const { homeInfo: { name } } = this.props;
    return (
      <div className="mobx">
        <p>{name}</p>
      </div>
    );
  }
}

Home.propTypes = {
  homeInfo: PropTypes.objectOf(PropTypes.object),
};

Home.defaultProps = {
  homeInfo: {},
};
