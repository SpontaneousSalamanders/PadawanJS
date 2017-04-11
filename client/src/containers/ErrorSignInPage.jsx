import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


let ErrorSignIn = (props) => {
  return (
    props.errorSignIn ?
      <div>
        <p>{props.errorSignIn}</p>
      </div>
      :<div></div>
  );
};

ErrorSignIn.propTypes = {
  errorSignIn: PropTypes.string
};

const mapStateToProps = (state) => ({
  errorSignIn: state.errorSignIn
});

ErrorSignIn = connect(mapStateToProps)(ErrorSignIn);

export default ErrorSignIn;