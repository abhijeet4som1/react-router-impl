import React from "react";

const Users = (props) => {
  return(
    <div className='column'>
          <div>
            <span className="del-user"
              onClick={props.delUser.bind(this, props.id)}>X</span>
            <h4>{props.uname}</h4>
          </div>
          <b>{props.phone}</b>
      </div>
  );
}

export default Users;
