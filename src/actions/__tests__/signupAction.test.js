import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import { createUser } from '../signupAction';
import * as actions from '../actionType';

Enzyme.configure({ adapter: new Adapter() });

let store;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));


describe('should test signup actions', () => {
    const mockStore = configureStore([thunk]);

    beforeEach(() => {
      store = mockStore({
        data: {},
      });
    });
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });
    it('add user', async () => {
      const successData = {
        data: {},
      };
      const responseData = {
        data: {},
      };

      fetchMock.post('https://automart2019.herokuapp.com/api/v1/auth/signup', responseData);

      const expectedActions = [{
        type: actions.ADD_USER,
        payload: successData,
      }];
      store.dispatch(createUser({
        email: "jonathanaurugai@gmail.com",
        first_name : "Jonathan",
        last_name: "Aurugai",
        password: "Root1234",
        address :"Kampala"
    }));
      await flushAllPromises();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });