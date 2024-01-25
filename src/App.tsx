import { RouterProvider } from "react-router-dom";
import router from "./presentation/router";
import "sanitize.css";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>.</div>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
