import { StyledButton } from "./Button.styles";

function Button(porps: React.ComponentProps<"button">) {
  return <StyledButton {...porps} />;
}

export default Button;
