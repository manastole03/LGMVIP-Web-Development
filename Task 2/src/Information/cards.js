import React from "react";
const Users = ({ loading, users }) => {
  const mainstyle = {
    display: "flex"
  };
  return loading ? (
    <div id="main" align="center">
      <img
        src="https://media4.giphy.com/media/ZO9b1ntYVJmjZlsWlm/200.webp?cid=ecf05e47lf3mvf079bbzp65dw0car309d12086epmd4ptnwf&rid=200.webp&ct=g"
        alt="loading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main" style={mainstyle}>
      {users.map((user) => (
        <div className="profile_cont" key={user.id}>
          {console.log(user)}

          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">Email: {user.email}</p>
          <p>User: {user.id}</p>
        </div>
      ))}
    </div>
  );
};
export default Users;