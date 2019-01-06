const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const DELETE_USER = 'DELETE_USER';

/*method to call api and return response*/
const fetchGet = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
}

const setUserData = (users) => {
    return {
        type: LOAD_USER_SUCCESS,
        users: users
    }
}

const loadUserData = () => {
    return dispatch => fetchGet().then(data => dispatch(setUserData(data)));
}

const deleteUser = (userById) => {
    return {
        type: DELETE_USER,
        userId: userById
    }
}

export {
    LOAD_USER_SUCCESS,
    DELETE_USER,
    loadUserData,
    deleteUser
}