import VideosNavegation from "./parts/videos/VideosNavegation";
import MaterialNavegation from "./parts/material/MaterialNavegation";
import { Course } from "../../data/fetcher";
import { matchRoutes } from "react-router";

export type NavegationItem = {
  unresolvedPath: string;
  icon: string;
  to: string;
  element?: (course: Course) => React.ReactNode;
  title?: (course: Course) => string;
};

const NAVEGATION_MAP = {
  HOME: {
    unresolvedPath: "/:id",
    icon: "ri-home-3-line",
    to: "",
  },
  VIDEO: {
    unresolvedPath: "/:id/video/:videoId",
    icon: "ri-video-line",
    to: "video/1",
    element: (course) => <VideosNavegation course={course} />,
    title: (course) => course.media.title,
  },
  MATERIAL: {
    unresolvedPath: "/:id/material/:materialId",
    icon: "ri-file-4-line",
    to: "material/1",
    element: (course) => (
      <MaterialNavegation materials={course.materials.content} />
    ),
    title: (course) => course.materials.title,
  },
} satisfies Record<string, NavegationItem>;

export const NAVEGATION_ITEMS: NavegationItem[] = Object.values(NAVEGATION_MAP);

/** Gets the current path */
export function resolveCurrentPath() {
  return matchRoutes(
    NAVEGATION_ITEMS.map((navItem) => ({ path: navItem.unresolvedPath })),
    location
  )?.[0]?.route.path;
}

export function resolveHomePath() {
  return matchRoutes([{ path: NAVEGATION_MAP.HOME.unresolvedPath }], location);
}

/** Is currently on the home path */
export function isHome() {
  return (
    resolveHomePath()?.[0]?.pathnameBase === NAVEGATION_MAP.HOME.unresolvedPath
  );
}
