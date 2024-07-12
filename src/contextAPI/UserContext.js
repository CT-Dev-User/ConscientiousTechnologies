import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const Authcontext = createContext();

const Usercontext = ({ children }) => {
  const [userauth, setuserauth] = useState({
    user: null,
    token: "",
  });
 
  useEffect(() => {
    const userdata = localStorage.getItem("auth");
    if (userdata) {
      const parsedata = JSON.parse(userdata);
      setuserauth({
        ...userauth,
        
        user: parsedata.user,
        token: parsedata.token,
      });
    }
  }, []);
  
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = userauth?.token || "";
  }, [userauth.token]);
  return (
    <Authcontext.Provider value={[userauth, setuserauth]}>
      {children}
    </Authcontext.Provider>
  );
};
const useAuth = () => useContext(Authcontext);
export { useAuth, Usercontext };
