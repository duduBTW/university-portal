import HomeSection from "./parts/section/HomeSection";
import VideosCarousel from "../../components/video-carousel/VideosCarousel";
import useCourse from "../../data";
import {
  Container,
  Description,
  Header,
  Title,
  Tooltip,
} from "./HomePage.styles";

import MaterialsGrid from "../../components/materials-grid/MaterialsGrid";
import HomeBackgroundEffect from "./parts/background/HomeBackground";

function HomePage() {
  const { name, description, semester, materials, media } = useCourse();

  return (
    <Container>
      <HomeBackgroundEffect />

      <Header>
        <Tooltip>Semester {semester}</Tooltip>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Header>

      <HomeSection title={media.title}>
        <VideosCarousel videos={media.content} />
      </HomeSection>

      <HomeSection title={materials.title}>
        <MaterialsGrid materials={materials.content} />
      </HomeSection>
    </Container>
  );
}

export default HomePage;
