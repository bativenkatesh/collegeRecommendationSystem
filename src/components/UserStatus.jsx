import React from 'react'

const UserStatus = ({isAdmin,loggedin}) => {
  if(isAdmin && loggedin){
    return <h1>Welcome Admin</h1>;
  }
  else if(!isAdmin && loggedin){
    return <h1>Welcome user</h1>;
  }
}

export default UserStatus