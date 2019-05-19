const LOAD_USER = "LOAD_USER";
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const DELETE_USER = 'DELETE_USER';


const loadUserData = () => {
    return {type: LOAD_USER};
}

const deleteUser = userById => {
    return {
        type: DELETE_USER,
        userId: userById
    };
}

export {
    LOAD_USER,
    LOAD_USER_SUCCESS,
    DELETE_USER,
    loadUserData,
    deleteUser
}