import React, { useEffect } from "react";
import { useState } from "react";
import { getUserDetails, useAuth } from "../../helpers";

const Header = () => {
  const { authToken, setAuthToken } = useAuth();
  const [user, setUser] = useState({});
  useEffect(() => {
    (async () => {
      const res = await getUserDetails(authToken.token);
      setUser(res.data.data.data);
    })();
  }, []);
  const clickHandler = () => {
    localStorage.clear();
    setAuthToken({ token: null });
  };
  return (
    <div className="flex align-center justify-sa header">
      <div className="flex align-center gap-1">
        <h2>{user.name}</h2>
        <img
          alt={user.name}
          className="profile-avatar sm"
          src={user.photoUrl}
        />
      </div>
      <button onClick={clickHandler} className="btn ptr primary">
        Logout
      </button>
    </div>
  );
};

export { Header };
