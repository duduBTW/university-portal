import { useState } from "react";
import { Material } from "../../../../data/fetcher";
import {
  Container,
  Thumbnail,
  ThumbnailWrapper,
  Title,
} from "./MaterialsGridCard.styles";
import SlideInButton from "../../../slide-in-button/SlideInButton";

export type MaetrialGridCardProps = {
  material: Material;
};

function MaterialGridCard(props: MaetrialGridCardProps) {
  const { title, thumbnail } = props.material;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Container
      to="material"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <ThumbnailWrapper>
        <Thumbnail src={thumbnail} />

        <SlideInButton isActive={isHovering}>Read material</SlideInButton>
      </ThumbnailWrapper>
      <Title>{title}</Title>
    </Container>
  );
}

export default MaterialGridCard;
