import { useParams } from "react-router";
import MaterialsGrid from "../../components/materials-grid/MaterialsGrid";
import VideoCard from "../../components/video-carousel/parts/card/VideoCard";
import useCourse from "../../data";
import HomeSection from "../home/parts/section/HomeSection";
import {
  Container,
  Description,
  ProfessorName,
  Title,
  VideoWrapper,
} from "./VideosPage.styles";
import { useNextVideo, useVideo } from "./VideosPage.utils";
import LocalMedia from "./parts/Local/LocalMedia";
import YoutubeMedia from "./parts/Youtube/YoutubeMedia";

function VideosPage() {
  const { materials } = useCourse();
  const { videoId } = useParams();
  const { title, description, type } = useVideo();
  const nextVideo = useNextVideo(videoId);

  return (
    <Container key={videoId}>
      <div>
        <VideoWrapper>
          {type === "youtube" ? <YoutubeMedia /> : <LocalMedia />}
        </VideoWrapper>
        <Title>{title}</Title>
        <ProfessorName>Prof. Something</ProfessorName>
        {description && <Description>{description}</Description>}
      </div>

      {nextVideo && (
        <HomeSection title="Next video">
          <VideoCard isSelected video={nextVideo} scaling={1} />
        </HomeSection>
      )}
      <HomeSection title={materials.title}>
        <MaterialsGrid materials={materials.content} />
      </HomeSection>
    </Container>
  );
}

export default VideosPage;
