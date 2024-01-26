import { RouterProvider } from "react-router-dom";
import router from "./presentation/router";
import "sanitize.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
