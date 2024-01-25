import useEmblaCarousel from "embla-carousel-react";
import { Container, Content } from "./VideosCarousel.styles";
import VideoCard from "./parts/card/VideoCard";
import {
  useCarouselSelectedIndex,
  useCarouselTweenValues,
} from "./VideosCarousel.utils";
import { Media } from "../../data/fetcher";

type VideosCarouselProps = {
  videos: Media[];
};

function VideosCarousel(props: VideosCarouselProps) {
  const { videos } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: true,
    duration: 32,
  });

  const tweenValues = useCarouselTweenValues(emblaApi);
  const selectedIndex = useCarouselSelectedIndex(emblaApi);

  return (
    <Container ref={emblaRef}>
      <Content>
        {videos.map((video, index) => (
          <VideoCard
            key={video.id}
            isSelected={selectedIndex === index}
            scaling={tweenValues[index]}
            video={video}
          />
        ))}
      </Content>
    </Container>
  );
}

export default VideosCarousel;
