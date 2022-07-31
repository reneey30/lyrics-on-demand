import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import Favourites from "./Favourites";
import Lyrics from "./Lyrics";
import Home from "./Home";
import NavBarTop from "./NavBarTop";
import Login from "./Login";
import UpdateProfile from "./UpdateProfile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {


  return (
    <>
      <NavBarTop />
      <Container
        className="d-flex justify-content-center mt-4"
        style={{ minHeight: "100vh" }}
      >
       <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/favourites" component={Favourites}/>
          <Route path="/lyrics" component={Lyrics}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/updateprofile" component={UpdateProfile}/>
        </Switch>
       </Router> 
      </Container>
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
