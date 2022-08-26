import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebsae";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      user && history.push("/chats");
      user && console.log({ user });
    });
  }, [user, history]);
  const value = { user };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}{" "}
    </AuthContext.Provider>
  );
};
