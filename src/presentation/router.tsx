import { createBrowserRouter, defer, useRouteError } from "react-router-dom";
import HomePage from "./home/HomePage";
import { fetchCouse } from "../data/fetcher";
import Layout from "./layout/Layout";
import VideosPage from "./videos/VideosPage";
import MaterialsPage from "./material/MaterialsPage";

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
        id: "home",
        index: true,
        Component: HomePage,
      },
      {
        path: "video/:videoId",
        id: "video",
        Component: VideosPage,
        ErrorBoundary,
      },
      {
        path: "material/:materialId",
        id: "material",
        Component: MaterialsPage,
        ErrorBoundary,
      },
    ],
  },
]);

function ErrorBoundary() {
  let error = useRouteError();
  // Uncaught ReferenceError: path is not defined
  return <div>Smt went wrongeee</div>;
}

export default router;
