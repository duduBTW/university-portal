import HomeBackgroundEffect from "../home/parts/background/HomeBackground";
import GlobalStyle from "../layout/globalStyles";
import Button from "../../components/button/Button";
import { Container, Description } from "./GlobalErrorMessage.style";
import { Link } from "react-router-dom";

function GlobalErrorMessage() {
  return (
    <Container>
      <HomeBackgroundEffect />
      <GlobalStyle />

      <div>
        <h1>Something went wrong!</h1>
        <Description>
          You are probably trying to access an invalid course, go to a known
          course using the button bellow.
        </Description>
      </div>
      <Link to="/discord-bot">
        <Button>Redirect me</Button>
      </Link>
    </Container>
  );
}

export default GlobalErrorMessage;
