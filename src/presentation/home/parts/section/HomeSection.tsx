import { Container, Title } from "./HomeSection.styles";

export type HomeSectionProps = {
  title: string;
} & React.ComponentProps<"div">;

function HomeSection(props: HomeSectionProps) {
  const { title, children, ...rest } = props;

  return (
    <Container {...rest}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default HomeSection;
