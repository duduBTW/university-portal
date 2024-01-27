import { Bottom, Container, Description, Top } from "./Section.styles";
import top from "../../../data/top.svg";
import bottom from "../../../data/bottom.svg";
import { useState } from "react";
import linearScale from "../../../utils/linear-scale";

function calculateMousePosition(mouseX: number, divPosition: DOMRect) {
  const distanceFromLeft = Math.abs(mouseX - divPosition.left);
  const totalDistance = divPosition.right - divPosition.left;

  const value = 1 - distanceFromLeft / totalDistance;
  return Math.max(0, Math.min(1, value));
}

function SectionError(props: React.ComponentProps<"div">) {
  const { children, ...rest } = props;
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const clientPosiiton = e.currentTarget.getClientRects()[0];
    if (!clientPosiiton) {
      return;
    }

    setPosition({
      x: calculateMousePosition(e.pageX, clientPosiiton),
      y: calculateMousePosition(e.pageY, clientPosiiton),
    });
  };

  const xOffset = linearScale(position.x, [0, 1], [12, -12]);
  const yOffset = linearScale(position.y, [0, 1], [12, -12]);
  const opacity = linearScale(position.y, [0, 1], [0.6, 1]);
  const style: React.CSSProperties = {
    transform: `translate(${xOffset}px, ${yOffset}px) scale(1.1)`,
    opacity,
  };

  return (
    <Container onMouseMove={handleMouseMove} {...rest}>
      <Top src={top} style={style} />
      <h1>Something went wrong!</h1>
      <Description>{children}</Description>
      <Bottom src={bottom} style={style} />
    </Container>
  );
}

export default SectionError;
