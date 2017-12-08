import React from 'react';
import { shallow, mount } from 'enzyme';
import StepsDisplay from '../index';
describe('Steps Display Component', () => {
  let component, props;
  beforeEach(() => {
    props = {
      steps: [
        {id:1, label: 'label 1'},
        {id:2, label: 'label 2'},
        {id:3, label: 'label 3'}
      ],
      activeStep: 0,
      setActiveStep: jest.fn()
    };
    component = shallow(
      <StepsDisplay {...props} />
    )
  })
  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
  it('Should disable all buttons apart from active steps', () => {
    expect(component.find('.not-active').length).toEqual(2);
    expect(component.find('.active').length).toEqual(1);
  });
  it('Should set state activeStep to current id', () => {
    component = mount(<StepsDisplay {...props} />)
    const activeButton = component.find('.active');
    activeButton.simulate('click');
    expect(props.setActiveStep.mock.calls.length).toEqual(1);
    expect(props.setActiveStep.mock.calls[0][0]).toBe(props.steps[0].id);
  });
});