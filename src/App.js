import "./App.css";
import { useSelector } from "react-redux";
import Auth from "./Components/Auth";
import BasePage from "./Components/BasePage";

function App() {
  const auth = useSelector((state) => state.auth);
 

  return (
    <div className="App">{auth.isAuth === true ? <BasePage /> : <Auth />}</div>
  );
}

export default App;
