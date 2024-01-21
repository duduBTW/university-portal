import { useState } from "react";
import {
  Container,
  Thumbnail,
  ThumbnailWrapper,
  Title,
} from "./VideoCard.styles";
import SlideInButton from "../../../slide-in-button/SlideInButton";
import linearScale from "../../../../utils/linear-scale";

type VideoCardProps = {
  scaling?: number;
  title: string;
  isSelected: boolean;
  thumbnail: string;
};

function VideoCard(props: VideoCardProps) {
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
          }}
          src={thumbnail}
        />
        <SlideInButton isActive={isSelected && isHovering && scaling > 0.8}>
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
