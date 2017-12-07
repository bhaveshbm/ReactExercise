import React, { PureComponent } from 'react';
import { StepsCreator } from '../StepsCreator';
import StepsDisplay from '../StepsDisplay';
import StepsSetup from '../StepsSetup';

export default class Steps extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      steps: [],
      activeStep: 0,
      stepsDisplay: false
    }
    this.stepsCreate = this.stepsCreate.bind(this);
    this.setActiveStep = this.setActiveStep.bind(this);
    this.stepsUpdate = this.stepsUpdate.bind(this);
  }
  stepsCreate(numberOfSteps) {
    const steps = [];
    for(let index = 0; index < numberOfSteps; index++) {
      const id = index + 1;
      steps.push({
        id,
        label: 'label '.concat(id)
      })
    }
    this.setState({
      steps, 
      activeStep: 0,
      stepsDisplay: false});
  }
  stepsUpdate(steps) {
    this.setState({stepsDisplay: true, steps});
  }
  setActiveStep(activeStep) {
    this.setState({activeStep});
  }
  render () {
    const { stepsDisplay, steps } = this.state
    return (
      <div>
        <StepsCreator stepsCreate={this.stepsCreate} />
        {stepsDisplay && <StepsDisplay {...this.state} setActiveStep={this.setActiveStep} />}
        {!stepsDisplay && steps.length 
          && <StepsSetup steps={steps} stepsUpdate={this.stepsUpdate} />
        }
      </div>
    )
  }
}