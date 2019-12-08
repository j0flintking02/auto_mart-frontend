import Enzyme, { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16/build';
import { SignupTest } from '../Signup';

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])({
 data:{}
});

let wrapper;

describe('signup Component', () => {
    const submitHandler = jest.fn();
    // const createSpy = toSpy => jest.spyOn(wrapper.instance(), toSpy);

    Object.defineProperty(window.location, 'reload', {
      configurable: true,
    });

    // window.location.reload = jest.fn();
    const nextProps = { data: {} };

    const props = {
      user:{ data: {} },
      createUser: jest.fn,
      history: { push: jest.fn() },
    };

    beforeEach(() => {

      wrapper = mount(
        <SignupTest {...props} />,
      );
    });
    const getEvent = (name = '', value = '') => ({
      preventDefault: jest.fn(),
      target: {
        name,
        value,
      },
    });

    it('should render signup component', () => {
      expect(wrapper).toHaveLength(1);
    });

    it.only('should simulate a click', () => {
      wrapper.setProps(props);
      console.log(wrapper.props());
      
    expect(wrapper.find('.btn')).toHaveLength(1);
    wrapper.find('form').simulate('submit', getEvent())
    expect(submitHandler).toBeCalledTimes(1);
    });

    it.skip('should call handleChange on form fill', () => {
      const spy = createSpy('onchangeHandle');
      wrapper.instance().forceUpdate();
      wrapper.find('input[name="fName"]').simulate('change', { target: { value: 'John' } });
      wrapper.find('input[name="lName"]').simulate('change', { target: { value: 'Doe' } });
      wrapper.find('input[name="email"]').simulate('change', { target: { value: 'johndoe@gmail.com' } });
      wrapper.find('input[name="address"]').simulate('change', { target: { value: 'Kampala' } });
      wrapper.find('input[name="password"]').simulate('change', { target: { value: 'Root1234' } });
      expect(spy).toBeCalled();
    });
  });