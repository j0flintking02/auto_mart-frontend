import signupReducer from '../signupReducer';

describe('signup Reducer', () => {
  it('should test the signup reducer', () => {
    const initialState = {
        data: {},
    };
    const data = {
        data: {},
    };
    const response = {
        data: { data: {} }
    };
    expect(signupReducer(initialState, {
      type: 'ADD_USER',
      payload: data,
    })).toEqual(response);
  });
});