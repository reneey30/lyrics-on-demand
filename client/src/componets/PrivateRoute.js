import React from "react"
import { Route, Redirect } from "react-router-dom"
// import { OurAuthContext } from "../contexts/OurAuthContext"
// import { useAuth } from "../contexts/AuthContext"


export default function PrivateRoute({ component: Component, ...rest }) {
  // const [currentUser, setCurrentUser] = useState();

  // const { currentUser } = useContext(OurAuthContext);
  // const currentUser = "irene@email.com";
  const currentUser = localStorage.getItem('savedUser');
  // const savedUser = localStorage.getItem('savedUser');
  //   if (savedUser){
  //     setCurrentUser(savedUser);
  //   }

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}