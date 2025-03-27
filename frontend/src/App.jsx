import "./App.css";
import Routing from "./Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        toastClassName="red-toast"
      />
    </>
  );
}

export default App;
