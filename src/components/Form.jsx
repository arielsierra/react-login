import React from "react";
import Input from "./Input";



let Form = (props) => 
        <div>
            <form className="form">
                <Input
                    Type ="text"
                    placeholder="Username"
                />
                <Input
                    Type ="password"
                    placeholder="Password"
                />
                {props.userIsRegistered === false ?
                 <Input
                    Type ="password"
                    placeholder="Confirm Password"
                 />
                 :
                 null
                 }
                <button type="submit">{props.userIsRegistered === false ? "Register" : "Login"}</button>
            </form>
        </div>
;

export default Form;