/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sessionSelectors from '../redux/session/sessionSelectors';

const ProtectedRoute = BaseComponent => {
  class ProtectedRoute extends Component {
    componentDidMount() {
      if (this.props.authenticated) {
        return;
      }

      this.props.history.replace('/login');
    }

    componentDidUpdate() {
      if (this.props.authenticated) {
        return;
      }

      this.props.history.replace('/login');
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authenticated: sessionSelectors.isAuthenticated(state),
  });

  return connect(mapStateToProps)(ProtectedRoute);
};

export default ProtectedRoute;
