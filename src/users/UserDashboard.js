import React, { Component } from 'react';
import { connect } from "react-redux";

import Users from './Users';
import {loadUserData, deleteUser} from './usersActions';

class UserDashboard extends Component {

  componentDidMount(){
    if(0 === this.props.users.length){
      console.log("calling load user");
      this.props.loadUser();
    }
  }

  render() {
    return (
      <div className='grid'>
        {this.props.users.map(user =>
          <Users
            key={`user-${user.id}`}
            id={user.id}
            uname={user.name}
            phone={user.phone}
            delUser={this.props.deleteUserById}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    users: state.users.users
});
const mapDispatchToProps = dispatch => ({
    loadUser: () => dispatch(loadUserData()),
    deleteUserById: userId => dispatch(deleteUser(userId))
});
export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
