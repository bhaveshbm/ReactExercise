import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './StepsCreator.css';

export const validate = (steps) => {
  return Number.isInteger(steps) && steps > 1 && steps < 6;
}
export class StepsCreator extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      isError: true,
      steps: 0
    }
    this.inputOnChange = this.inputOnChange.bind(this);
  }
  inputOnChange (event) {
    const val = parseInt(event.target.value, 10);
    const isError = !validate(val);
    this.setState({ isError });
    if (isError) {
      event.target.value = '';
      this.stepInput.focus();
    } else {
      this.props.stepsCreate(val);
    }
  }
  componentDidMount () {
    this.stepInput.focus();
  }
  render () {
    const { isError } = this.state;
    return (<div>
      <form>
        <label htmlFor='stepInput'>Number of steps: </label>
        <input className={ isError
          ? 'step-input error'
          : 'step-input'}
          type='number'
          placeholder='Enter steps between 2 to 5'
          onChange={this.inputOnChange}
          ref={(element) => { this.stepInput = element }}
        />
      </form>
    </div>
    )
  }
}

StepsCreator.propTypes = {
  stepsCreate: PropTypes.func.isRequired,
};
