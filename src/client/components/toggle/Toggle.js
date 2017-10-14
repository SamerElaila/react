import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { toggleChange } from '../../actions/toggle-actions';

import './Toggle.css';

class Toggle extends Component {
  render() {
    const sliderClass = classnames({
      toggle__slider: true,
      'toggle__slider--round': this.props.isRound
    });

    return (
      <label className='toggle'>
        <input
          className ='toggle__checkbox'
          type='checkbox'
          checked={this.props.isChecked}
          onClick={this.props.toggleChange}
        />
        <span className={sliderClass}></span>
      </label>
    );
  }
}

Toggle.propTypes = {
  isChecked: PropTypes.bool,
  toggleChange: PropTypes.func,
  isRound: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    isChecked: state.toggle
  };
};

const mapDispatchToProps = {
  toggleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
