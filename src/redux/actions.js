import { authSlice } from "./slice";

const { actions: slice } = authSlice;

//Login action
export const LoginAction = (phone) => (dispatch) => {
  dispatch(slice.setLogin(phone));
};

//Logout action
export const LogoutAction = () => (dispatch) => {
  dispatch(slice.setLogout());
};

//get data
export const getDataAction = ()=>(dispatch)=>{
  // dispatch(slice.setLogout());
  fetch('https://jsonplaceholder.typicode.com/todos/3')
  .then(response => response.json())
  .then(json => dispatch(slice.setData(json)))
  .catch(err=> console.log(err))
}
