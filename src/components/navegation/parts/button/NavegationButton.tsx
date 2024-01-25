import { matchRoutes, useLocation, useNavigate } from "react-router";
import { NavegationItem } from "../../Navegation";
import { Container } from "./NavegationButton.styles";

function NavegationButton({ icon, to, unresolvedPath }: NavegationItem) {
  const location = useLocation();
  const mathedPath = matchRoutes([{ path: unresolvedPath }], location);
  const navigate = useNavigate();

  const isActive = mathedPath !== null;

  const handleClick = () => {
    navigate(to);
  };

  return (
    <Container onClick={handleClick} isActive={isActive}>
      <i className={icon} />
    </Container>
  );
}

export default NavegationButton;
