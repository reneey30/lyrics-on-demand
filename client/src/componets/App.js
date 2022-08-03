import React, { useState } from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import Favourites from "./Favourites";
import Lyrics from "./Lyrics";
import Home from "./Home";
import NavBarTop from "./NavBarTop";
import Login from "./Login";
import UpdateProfile from "./UpdateProfile";
import { DataContext } from "../contexts/DataContext";
import { AuthProvider } from "../contexts/AuthContext";
import { OurAuthContext } from "../contexts/OurAuthContext";
import PrivateRoute from "./PrivateRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [lyrics, setLyrics] = useState({});
  // SHIDA!!! try finding out why currentUser value does not persist across pages
  //
  const [currentUser, setCurrentUser] = useState();

  function login(email, password) {
    // return auth.signInWithEmailAndPassword(email, password)
    setCurrentUser("irene@test.com");
  }

  function logout() {
    // return auth.signOut()
    setCurrentUser();
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
      <NavBarTop />
        <Container
          className="d-flex justify-content-center mt-4"
          style={{ minHeight: "100vh" }}
        >
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
        </Container>
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
