import { StyledSlideInButton } from "./SlideInButton.styles";

export type SlideInButtonProps = {
  isActive: boolean;
} & React.ComponentProps<typeof StyledSlideInButton>;

function SlideInButton(props: SlideInButtonProps) {
  return <StyledSlideInButton {...props} />;
}

export default SlideInButton;
