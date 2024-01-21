import { Container, Title } from "./Section.styles";

export type SectionProps = {
  title: string;
};

function Section(props: SectionProps & React.ComponentProps<"div">) {
  const { title, children, ...rest } = props;

  return (
    <Container {...rest}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default Section;
