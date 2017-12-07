import React from 'react';
import { shallow, mount } from 'enzyme';
import Steps from '../index';

describe('Steps component', () => {
  it('Should render successfully', () => {
    const component = shallow(<Steps />);
    expect(component.exists()).toEqual(true);
  });
  it('Should updates state steps when stepsUpdate method called', () => {
    const component = mount(<Steps />);
    expect(component.instance().state.steps).toEqual([]);
    component.instance().stepsCreate(2);
    const expected = {
      steps: [
        {id: 1, label: 'label 1'},
        {id: 2, label: 'label 2'}
      ],
      activeStep: 0,
      stepsDisplay: false
    }
    expect(component.instance().state).toEqual(expected);
  });
  it('Should update state activeStep when setActiveStep method called', () => {
    const component = mount(<Steps />);
    expect(component.instance().state.activeStep).toEqual(0);
    component.instance().setActiveStep(1);
    expect(component.instance().state.activeStep).toEqual(1);
  });
  it('Should update state steps when stepUpdates method called', () => {
    const component = mount(<Steps />);
    const expected =  [
      {id: 1, label: 'build'},
      {id: 2, label: 'test'}
    ]
    expect(component.instance().state.steps).toEqual([]);
    component.instance().stepsUpdate(expected);
    expect(component.instance().state.steps).toEqual(expected);
  })
});