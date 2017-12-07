import React from 'react';
import PropTypes from 'prop-types';
import './StepsDisplay.css';
const StepsDisplay = ({ steps, activeStep, setActiveStep }) => {
  return(
    <div className={'container'}>
      { !steps.length
        && <p id={'message'}>Add steps between 2 and 5</p> }
      <ul className={'stepsbar'}>
        { steps.map(step => {
          const isActiveStep = step.id === (activeStep + 1); 
          return(
            <li key={step.id} className={step.id <= activeStep ? 'processed' : 'not-processed'}>
              <button
                onClick = {() => setActiveStep(step.id)}
                disabled = { !isActiveStep }
                className = { isActiveStep ? 'active' : 'not-active'}
              >
                {step.label}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
StepsDisplay.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
};
export default StepsDisplay;