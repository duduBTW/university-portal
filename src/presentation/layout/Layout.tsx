import { Suspense } from "react";
import { Await, Outlet, useRouteLoaderData } from "react-router";
import { fetchCouse } from "../../data/fetcher";
import { COURSE_ROUTE_ID } from "../router";
import GlobalStyle from "./globalStyles";
import Navegation from "../../components/navegation/Navegation";
import { Container } from "./Layout.styles";
import { ScrollRestoration } from "react-router-dom";

function Layout() {
  const { course } = useRouteLoaderData(COURSE_ROUTE_ID) as {
    course: ReturnType<typeof fetchCouse>;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyle />

      <Await resolve={course}>
        {(resolvedData) => (
          <Container>
            <Navegation course={resolvedData} />
            <Outlet context={resolvedData} />
            <ScrollRestoration />
          </Container>
        )}
      </Await>
    </Suspense>
  );
}

export default Layout;
