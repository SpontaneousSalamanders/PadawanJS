import React, { Component } from 'react';
import { connect } from 'react-redux';

const jwt_decode = require('jwt-decode');




export default function(ComposedComponent) {
  class MentorProfileAuthorization extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if ( (!this.props.authenticated) || (!this.props.mentor_privileges) ) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if ( (!nextProps.authenticated) || (!this.props.mentor_privileges) ) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated, mentor_privileges: state.auth.mentor_privileges };
  }

  return connect(mapStateToProps)(MentorProfileAuthorization);
}
