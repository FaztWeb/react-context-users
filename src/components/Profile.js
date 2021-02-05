import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar}
            alt="user selected"
            className="card-img-top img-fluid rounded-circle m-auto"
            style={{ width: 180 }}
          />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>email: {selectedUser.email}</h3>
        </div>
      ) : (
        <div>No User selected</div>
      )}
    </>
  );
};

export default Profile;
