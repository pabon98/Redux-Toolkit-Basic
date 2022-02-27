import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, LogoutAction } from "../redux/actions";

const BasePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  // console.log("isAuth", auth);
  return (
    <div>
      <p className="fs-2">Welcome {auth.data.title}</p>
      <h4>Id: {auth.data.id}</h4>
      <h5>Title: {auth.data.title}</h5>
      <h5>Phone: {auth.phone}</h5>
    
      <button
        onClick={() => dispatch(LogoutAction())}
        className="btn btn-danger"
      >
        LogOut
      </button>
    </div>
  );
};

export default BasePage;
