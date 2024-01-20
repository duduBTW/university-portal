import { Suspense } from "react";
import { Await, Outlet, useRouteLoaderData } from "react-router";
import { fetchCouse } from "../data/fetcher";

function Layout() {
  const { course } = useRouteLoaderData("course") as {
    course: ReturnType<typeof fetchCouse>;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={course}>
        {(resolvedData) => <Outlet context={resolvedData} />}
      </Await>
    </Suspense>
  );
}

export default Layout;
