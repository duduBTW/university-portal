import { createBrowserRouter, defer } from "react-router-dom";
import HomePage from "./home/HomePage";
import { fetchCouse } from "../data/fetcher";
import Layout from "./layout/Layout";
import VideosPage from "./videos/VideosPage";

export const COURSE_ROUTE_ID = "course";

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
    id: COURSE_ROUTE_ID,
    path: "/:id",
    loader: couseLoader,
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        index: false,
        path: "video",
        Component: VideosPage,
      },
    ],
  },
]);

export default router;
