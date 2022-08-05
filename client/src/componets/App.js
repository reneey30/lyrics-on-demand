import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import Favourites from "./Favourites";
import Lyrics from "./Lyrics";
import Home from "./Home";
// import NavBarTop from "./NavBarTop";
import Login from "./Login";
import UpdateProfile from "./UpdateProfile";
import { DataContext } from "../contexts/DataContext";
// import { AuthProvider } from "../contexts/AuthContext";
import { OurAuthContext } from "../contexts/OurAuthContext";
import PrivateRoute from "./PrivateRoute";
import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [lyrics, setLyrics] = useState({});
  // SHIDA!!! try finding out why currentUser value does not persist across pages
  //clues to above problem -- seems to be caused by using href a links on navbar..
  //see if one can navigate using Link or other alternative
  //
  // alternatively, instead of using this problematic currentUser state, use
  // cookies to retrieve user info and log in state
  const [currentUser, setCurrentUser] = useState();

  useEffect(()=>{
    const savedUser = localStorage.getItem('savedUser');
    if (savedUser){
      setCurrentUser(savedUser);
    }
  }, [currentUser]);

  const history = useHistory();

  function login(email, password) {
    // return auth.signInWithEmailAndPassword(email, password)
    localStorage.setItem('savedUser', 'njesh@test.com');
    setCurrentUser("njesh@test.com");
    // history.push("/");
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
    currentUser
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
                <Route path="/updateprofile" component={UpdateProfile} />
              </Switch>
            </Router>
          </DataContext.Provider>
      
      </OurAuthContext.Provider>
        
      {/* </AuthProvider> */}
    </>
  );
}
// import React from "react"
// import Signup from "./Signup"
// import { Container } from "react-bootstrap"
// import { AuthProvider } from "../contexts/AuthContext"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Dashboard from "./Dashboard"
// import Login from "./Login"
// import PrivateRoute from "./PrivateRoute"
// import UpdateProfile from "./UpdateProfile"

// function App() {
//   return (
//     <Container
//       className="d-flex align-items-center justify-content-center"
//       style={{ minHeight: "100vh" }}
//     >
//       <div className="w-100" style={{ maxWidth: "400px" }}>
//         <Router>
//           <AuthProvider>
//             <Switch>
//               <PrivateRoute exact path="/" component={Dashboard} />
//               <PrivateRoute path="/update-profile" component={UpdateProfile} />
//               <Route path="/signup" component={Signup} />
//               <Route path="/login" component={Login} />
//                       </Switch>
//           </AuthProvider>
//         </Router>
//       </div>
//     </Container>
//   )
// }

export default App;
