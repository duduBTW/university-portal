import { Container, Header, Title } from "./NavegationPopover.styles";

type NavegationPopoverProps = {
  title: string | undefined;
  children: React.ReactNode;
} & React.ComponentProps<"div">;

function NavegationPopover(props: NavegationPopoverProps) {
  const { children, title, ...rest } = props;

  return (
    <Container {...rest}>
      <Header>{title && <Title key={title}>{title}</Title>}</Header>
      {children}
    </Container>
  );
}

export default NavegationPopover;
