import React from "react";
import Form from "./Form";

var userIsRegistered = true;
function login() {
  return userIsRegistered === true ? (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  ) : (
    <Form />
  );
}

function App() {
  return <div className="container">{login()}</div>;
}

export default App;
