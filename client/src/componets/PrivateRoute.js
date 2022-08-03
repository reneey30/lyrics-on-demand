import React, {useContext} from "react"
import { Route, Redirect } from "react-router-dom"
import { OurAuthContext } from "../contexts/OurAuthContext"
// import { useAuth } from "../contexts/AuthContext"


export default function PrivateRoute({ component: Component, ...rest }) {

  const { currentUser } = useContext(OurAuthContext);
  // const currentUser = "irene@email.com";

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}