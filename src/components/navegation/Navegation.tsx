import { Course } from "../../data/fetcher";
import NavegationButton from "./parts/button/NavegationButton";
import NavegationPopover from "./parts/popover/NavegationPopover";
import { Container, NavegationList } from "./Navegation.styles";
import {
  NAVEGATION_ITEMS,
  isHome,
  resolveCurrentPath,
} from "./Navegation.utils";

type NavegationProps = { course: Course };

function Navegation(props: NavegationProps) {
  const { course } = props;
  const content = NAVEGATION_ITEMS.map((navegationItme) => (
    <NavegationButton key={navegationItme.unresolvedPath} {...navegationItme} />
  ));

  return (
    <Container isHome={isHome()}>
      <Sidebar course={course} />
      <NavegationList>{content}</NavegationList>
    </Container>
  );
}

function Sidebar(props: NavegationProps) {
  const { course } = props;
  const currentResolvedPath = resolveCurrentPath();
  const selectedNavItemIndex = NAVEGATION_ITEMS.findIndex(
    (navItem) => navItem.unresolvedPath === currentResolvedPath
  );

  const selectedNavItem = NAVEGATION_ITEMS[selectedNavItemIndex];
  if (!selectedNavItem || !selectedNavItem.element) {
    return null;
  }

  return (
    <NavegationPopover
      style={{
        marginTop: selectedNavItemIndex * 52,
      }}
      title={selectedNavItem.title?.(course)}
    >
      {selectedNavItem.element(course)}
    </NavegationPopover>
  );
}

export default Navegation;
