import { useState } from "react";
import Button from "../button/Button";
import {
  Container,
  Thumbnail,
  ThumbnailWrapper,
  Title,
  WatchButton,
} from "./VideoCard.styles";
import SlideInButton from "../slide-in-button/SlideInButton";

export function linearScale(
  inputValue: number,
  inputRange: [number, number],
  outputRange: [number, number]
): number {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;

  // Ensure the input value is within the input range
  const clampedInput = Math.min(Math.max(inputValue, inputMin), inputMax);

  // Calculate the scaled value
  const inputRangeSize = inputMax - inputMin;
  const outputRangeSize = outputMax - outputMin;
  const scale = outputRangeSize / inputRangeSize;
  const scaledValue = outputMin + (clampedInput - inputMin) * scale;

  return scaledValue;
}

function VideoCard(props: {
  scaling?: number;
  title: string;
  isSelected: boolean;
  thumbnail: string;
}) {
  const { thumbnail, title, isSelected, scaling = 1 } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Container
      to="video"
      style={{
        opacity: Math.max(scaling, 0.32),
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      isSelected={isSelected}
    >
      <ThumbnailWrapper>
        <Thumbnail
          style={{
            transform: `scale(${linearScale(scaling, [0, 1], [0.82, 1])})`,
            transformOrigin: "bottom center",
          }}
          src={thumbnail}
        />
        <SlideInButton
          isActive={isSelected && isHovering && scaling > 0.8}
          // style={{
          //   opacity: scaling,
          // }}
        >
          Watch video
        </SlideInButton>
      </ThumbnailWrapper>
      <Title
        style={{
          width: `${linearScale(scaling, [0.3, 1], [100, 0])}%`,
        }}
      >
        {title}
      </Title>
    </Container>
  );
}

export default VideoCard;
