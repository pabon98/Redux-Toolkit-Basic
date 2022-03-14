import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../redux/actions";

const Auth = () => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1 className="text-primary">Welcome to Redux Application</h1>
        <br />
        <h2>Please Login</h2>
        <input
        style={{'padding': '3px', 'margin': '3px'}}
          type="text"
          name="phone"
          value={phone}
          placeholder="Enter your phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          onClick={() => dispatch(LoginAction(phone))}
          className="btn btn-success"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
