// import React from "react";
// import { Route, Redirect, Switch } from 'react-router-dom';
// import Login from "./Login";
// import CalendarLanding from "./CalendarLanding";
// import { useSelector } from "react-redux";

// const AppPages = () => {
//   const userHasAccess = useSelector((state) => state.user.hasAccess);

//   return (
//     <Switch>
//       <Route
//         exact
//         path="/login"
//         render={() => (userHasAccess ? <Redirect to="/calendar" /> : <Login />)}
//       />
//       <PrivateRoute
//         path="/appointment"
//         component={CalendarLanding}
//         hasAccess={userHasAccess}
//       />
//     </Switch>
//   );
// };

// // PrivateRoute component that redirects to login if user doesn't have access
// const PrivateRoute = ({ component: Component, hasAccess, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       hasAccess ? <Component {...props} /> : <Redirect to="/login" />
//     }
//   />
// );

// export default AppPages;