import {
  LoaderFunctionArgs,
  createBrowserRouter,
  defer,
  useRouteError,
} from "react-router-dom";
import HomePage from "./home/HomePage";
import { fetchCouse } from "../data/fetcher";
import Layout from "./layout/Layout";
import VideosPage from "./videos/VideosPage";
import MaterialsPage from "./material/MaterialsPage";
import Button from "../components/button/Button";
import GlobalStyle from "./layout/globalStyles";
import HomeBackgroundEffect from "./home/parts/background/HomeBackground";
import GlobalErrorMessage from "./error/Global/GlobalErrorMessage";
import MaterialError from "./material/parts/Error/MaterialError";

export const COURSE_ROUTE_ID = "course";

async function couseLoader({ params }: LoaderFunctionArgs) {
  return defer({
    course: fetchCouse(params.id),
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
    ErrorBoundary: GlobalErrorMessage,
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
        ErrorBoundary: MaterialError,
        hasErrorBoundary: true,
      },
      {
        path: "material/:materialId",
        id: "material",
        Component: MaterialsPage,
        ErrorBoundary: MaterialError,
      },
    ],
  },
]);

function ErrorBoundary() {
  let error = useRouteError();
  // Uncaught ReferenceError: path is not defined
  return <div>Smt went wrongeee</div>;
}

function MainErrorBoundary() {}

export default router;
