import initialState from '../store/initialState';
import {LOAD_USER_SUCCESS, DELETE_USER} from './usersActions';
const userReducer = (state = initialState.users, action) => {

    switch(action.type){
        case LOAD_USER_SUCCESS: {
            return Object.assign({}, state, {
                users: action.users
            });
        }

        case DELETE_USER: {
            let newUsers = state.users.slice(0);
            let index = newUsers.findIndex(user => user.id === action.userId);
            if(index > -1){
                newUsers.splice(index, 1);
            }
            return Object.assign({}, state, {
                users: newUsers
            });
        }

        default:
            return state;
    }

}

export default userReducer;