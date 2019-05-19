import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import users from './userLoadResponse';
import {loadUserData, deleteUser, DELETE_USER, LOAD_USER_SUCCESS} from '../usersActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Actions Tests', () => {
    afterEach(() => {
        fetchMock.restore()
    });

    it('Delete user action, should create a action to delete user', () => {
        const userId = 5;
        const expectedAction = {
            type: DELETE_USER,
            userId: userId
        }
        expect(deleteUser(userId)).toEqual(expectedAction);
    });

    it('creates LOAD_USER_SUCCESS when fetching users has been done', () => {
        fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
          body: users,
          headers: { 'content-type': 'application/json' }
        })
    
        const expectedActions = [
          { type: LOAD_USER_SUCCESS, users: users }
        ]
        const store = mockStore({ users: [] })
    
        return store.dispatch(loadUserData()).then(() => {
          // return of async actions
          expect(store.getActions()).toEqual(expectedActions)
        })
      })
});