import React from "react";
import Form from "./Form";

let userIsRegistered = true;

let App = () => 
    <div className="container">
        <Form userIsRegistered={userIsRegistered}/>
    </div>
;

export default App;

//Reference
// isLoggedIn ? <h1>Hello</h1> : <Login />
