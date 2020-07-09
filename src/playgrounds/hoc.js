//Higher Order Component (HOC) -A component (HOC) that renders another component
//Reuse code
//render hijacking
//Prop manipulation
//Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>INFO</h1>
    <p>The Info is: {props.info}</p>
  </div>
);

//HOC Component

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>this is private info. Please dont share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="This is the detail" />,
//   document.getElementById("app"),
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="This is the detail" />,
  document.getElementById("app"),
);
