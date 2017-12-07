import React from 'react';
import { shallow, mount } from 'enzyme';
import { StepsCreator, validate } from '../index';

describe('validate', () => {
  it('Should return false for non number values', () => {
    expect(validate()).toBeFalsy();
  })
  it('Should return false for number less than 2 or greater than 5', () => {
    expect(validate(1)).toBeFalsy();
    expect(validate(6)).toBeFalsy();
  })
  it('Should return true for number between 2 and 5', () => {
    expect(validate(2)).toBeTruthy()
    expect(validate(4)).toBeTruthy()
  })
})

describe('StepCreator component', () => {
  let component;
  const mockFn = jest.fn();
  beforeEach(() => {
    component = shallow(<StepsCreator  stepsCreate={mockFn} />);
  });
  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
  it('Should have one input', () => {
    expect(component.find('.step-input').length).toEqual(1);
  });
  it('Should clear input and add error class for non number input', () => {
    component = mount(<StepsCreator stepsCreate={mockFn} />);
    const input = component.find('.step-input');
    input.node.value = 'test';
    input.simulate('change');
    expect(input.node.value).toEqual('');
    expect(input.hasClass('error')).toBeTruthy();
  });
  it('Should call updateSteps method when correnct steps enters', () => {
    component = mount(<StepsCreator stepsCreate={mockFn} />);
    expect(mockFn.mock.calls.length).toEqual(0);
    const input = component.find('.step-input');
    input.node.value = '3';
    input.simulate('change');
    expect(mockFn.mock.calls.length).toEqual(1);
    expect(mockFn.mock.calls[0][0]).toBe(3);
  })
})