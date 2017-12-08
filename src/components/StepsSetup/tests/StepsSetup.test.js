import React from 'react';
import { shallow, mount } from 'enzyme';
import StepsSetup from '../index';
describe('Steps Setup Component', () => {
  let component, props;
  beforeEach(() => {
    props = {
      steps: [
        {id:1, label: 'label 1'},
        {id:2, label: 'label 2'},
        {id:3, label: 'label 3'}
      ],
      stepsUpdate: jest.fn()
    };
    component = shallow(
      <StepsSetup {...props} />
    )
  })
  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
  it('Should called setsUpdate function on button click', () => {
    component = mount(<StepsSetup {...props} />)
    const Button = component.find('.step-submit');
    Button.simulate('click');
    expect(props.stepsUpdate.mock.calls.length).toEqual(1);
  });
});