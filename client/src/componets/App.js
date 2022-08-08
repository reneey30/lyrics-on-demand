import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Favourites from "./Favourites";
import Lyrics from "./Lyrics";
import Home from "./Home";
// import NavBarTop from "./NavBarTop";
import Login from "./Login";
import UpdateProfile from "./UpdateProfile";
import { DataContext } from "../contexts/DataContext";
import { OurAuthContext } from "../contexts/OurAuthContext";
import PrivateRoute from "./PrivateRoute";
// import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [lyrics, setLyrics] = useState({});

  const [currentUser, setCurrentUser] = useState();
  const [memberId, setMemberId ] = useState();
  

  useEffect(() => {
    const savedUser = localStorage.getItem("savedUser");
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, [currentUser]);

  async function authenticateFetch(member_email, password, route, fetchMethod) {
    return await fetch(route, {
      method: fetchMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        member_email,
        password,
      }),
    }).then((r) => {
      return r.json()
    });
  }

  async function update(email, password) {
    if (!memberId){
      console.error("no member id set");
      return
    }
    const route = `/members/${memberId}`;
    const method = "PATCH";
    return await authenticateFetch(email, password, route, method);
  }

  async function login(email, password) {
    const route = "/members/login";
    const method = "POST";
    return await authenticateFetch(email, password, route, method);
  }
  
  async function signup(email, password) {
    const route = "/members";
    const method = "POST";
    return await authenticateFetch(email, password, route, method);
  }

  function logout() {
    // return auth.signOut()
    setCurrentUser();
    localStorage.clear();
  }

  const sharedData = {
    lyrics,
    setLyrics,
  };
  const authData = {
    login,
    logout,
    signup,
    update,
    currentUser,
    setCurrentUser,
    memberId,
    setMemberId
  };

  return (
    <>
      {/* <AuthProvider> */}
      <OurAuthContext.Provider value={authData}>
        <DataContext.Provider value={sharedData}>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute path="/favourites" component={Favourites} />
              <PrivateRoute path="/lyrics" component={Lyrics} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/updateprofile" component={UpdateProfile} />
            </Switch>
          </Router>
        </DataContext.Provider>
      </OurAuthContext.Provider>

      {/* </AuthProvider> */}
    </>
  );
}

export default App;
