import React, { Component } from 'react';

import Toggle from '../toggle/Toggle';

class LoginForm extends Component {
  render() {
    return (
      <form>
        <Toggle isRound={true} />
      </form>
    );
  }
}

export default LoginForm;
