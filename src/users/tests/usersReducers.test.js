import userReducer from '../userActionReducer';
import {LOAD_USER_SUCCESS, DELETE_USER} from '../usersActions';
import users from './userLoadResponse';
import initialState from '../../store/initialState';

describe('user action reducer', () => {

    it('should return the initial state', () => {
      expect(userReducer(undefined, {})).toEqual(initialState.users)
    });
  
    it('should handle LOAD_USER_SUCCESS', () => {
        expect(
            userReducer(initialState.users, {
                type: LOAD_USER_SUCCESS,
                users: users
            })
        ).toEqual({
            users: users
        })
    });

    it('should handle DELETE_USER', () => {
        expect(
            userReducer({
                users: [
                    {
                        id: 10,
                        name: "Clementina DuBuque",
                        username: "Moriah.Stanton",
                        email: "Rey.Padberg@karina.biz"
                    }
                ]
            }, {
                type: DELETE_USER,
                userId: 10
            })
        ).toEqual({
            users: []
        })
    });

    it('should handle DELETE_USER', () => {
        expect(
            userReducer({
                users: [
                    {
                        id: 10,
                        name: "Clementina DuBuque",
                        username: "Moriah.Stanton",
                        email: "Rey.Padberg@karina.biz"
                    },
                    {
                        id: 11,
                        name: "Clementina DuBuque",
                        username: "Moriah.Stanton",
                        email: "Rey.Padberg@karina.biz"
                    }
                ]
            }, {
                type: DELETE_USER,
                userId: 10
            })
        ).toEqual({
            users: [
                {
                    id: 11,
                    name: "Clementina DuBuque",
                    username: "Moriah.Stanton",
                    email: "Rey.Padberg@karina.biz"
                }
            ]
        })
    });
});