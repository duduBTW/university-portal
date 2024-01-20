import { Outlet, createBrowserRouter, defer } from "react-router-dom";
import HomePage from "./home/HomePage";
import { fetchCouse } from "../data/fetcher";
import Layout from "./Layout";

async function couseLoader() {
  return defer({
    course: fetchCouse(),
  });
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Not found</div>,
  },
  {
    id: "course",
    path: "/course",
    loader: couseLoader,
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);

export default router;
