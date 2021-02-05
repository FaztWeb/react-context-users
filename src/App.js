import React from "react";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";

import UserState from "./context/User/UserState";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UsersList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
