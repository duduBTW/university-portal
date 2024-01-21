import Section from "../../components/section/Section";
import VideosCarousel from "../../components/video-carousel/VideosCarousel";
import useCourse from "../../data";
import {
  Container,
  Description,
  Header,
  Title,
  Tooltip,
  Left,
  Right,
} from "./HomePage.styles";
import leftImage from "../../data/left.svg";
import rightImage from "../../data/right.svg";
import MaterialsGrid from "../../components/materials-grid/MaterialsGrid";
import { useEffect, useState } from "react";
import { linearScale } from "../../components/video-card/VideoCard";

function HomePage() {
  const { name, description, semester, materials, media } = useCourse();

  return (
    <Container>
      <BackgroundEffect />

      <Header>
        <Tooltip>Semester {semester}</Tooltip>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Header>

      <Section title={media.title}>
        <VideosCarousel cards={media.content} />
      </Section>

      <Section title={materials.title}>
        <MaterialsGrid materials={materials.content} />
      </Section>
    </Container>
  );
}

function BackgroundEffect() {
  const scrollProgress = useScrollProgress();
  const yOffset = linearScale(scrollProgress, [0, 1], [0, -64]);

  const style: React.CSSProperties = {
    transform: `translateY(${yOffset}px)`,
  };

  return (
    <>
      <Left style={style}>
        <img src={leftImage} />
      </Left>
      <Right style={style}>
        <img src={rightImage} />
      </Right>
    </>
  );
}

function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollY / windowHeight;

      // Ensure the progress is between 0 and 1
      const clampedProgress = Math.min(1, Math.max(0, progress));

      setScrollProgress(clampedProgress);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollProgress;
}

export default HomePage;
