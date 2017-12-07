import React from 'react';
import PropTypes from 'prop-types';
const StepsSetup = ({ steps, stepsUpdate }) => {
  
  return(
    <div className={'container'}>
      { !steps.length
        && <p id={'message'}>Add steps between 2 and 5</p> }
        <h2>Setup labels </h2>
        { steps.map(step => {
          return(
            <div key={step.id}>
              <label htmlFor={step.id}>{step.id}:</label>
              <input type='text' className='step-input' 
                id={step.id}  
                onChange={(event) => {
                  if(event.target.value) {
                      step.label = event.target.value
                     }
                  } 
                }/>
            </div>
          )
        })}
        <button
         className='step-submit'
         onClick={() => stepsUpdate(steps)}>Save</button>
    </div>
  )
}
StepsSetup.propTypes = {
  steps: PropTypes.array.isRequired,
  stepsUpdate: PropTypes.func.isRequired,
};
export default StepsSetup;