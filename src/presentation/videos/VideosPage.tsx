import { useParams } from "react-router";
import MaterialsGrid from "../../components/materials-grid/MaterialsGrid";
import VideoCard from "../../components/video-carousel/parts/card/VideoCard";
import useCourse from "../../data";
import HomeSection from "../home/parts/section/HomeSection";
import {
  Container,
  Description,
  ProfessorName,
  Video,
  Title,
  VideoWrapper,
  MediaError,
  BottomBar,
} from "./VideosPage.styles";
import { useNextVideo, useVideo } from "./VideosPage.utils";
import { useRef, useState } from "react";
import Button from "../../components/button/Button";

function VideosPage() {
  const { materials } = useCourse();
  const { videoId } = useParams();
  const { title, description } = useVideo(videoId);
  const nextVideo = useNextVideo(videoId);

  return (
    <Container key={videoId}>
      <div>
        <Media />
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

function Media() {
  const { videoId } = useParams();
  const { source, type, thumbnail } = useVideo(videoId);
  const [error, setError] = useState(!source);
  const [hovering, setHovering] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (!video.paused) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const newProgress = (video.currentTime / video.duration) * 100;
    setProgress(newProgress);
  };

  return (
    <VideoWrapper>
      {error ? (
        <MediaError>
          <h2>Something went wrong!</h2>
          <Button onClick={() => setError(false)}>Try again!</Button>
        </MediaError>
      ) : (
        <Video
          ref={videoRef}
          onClick={handleVideoClick}
          onMouseLeave={() => setHovering(false)}
          onMouseEnter={() => setHovering(true)}
          autoPlay
          onError={() => setError(true)}
          controls={false}
          poster={thumbnail}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={source} type={type} />
          Your browser does not support HTML video.
        </Video>
      )}

      {hovering && (
        <BottomBar
          onClick={(e) => {
            e.stopPropagation();
          }}
          onMouseLeave={() => setHovering(false)}
          onMouseEnter={(e) => {
            setHovering(true);
          }}
        >
          {progress}
          <input
            style={{
              width: "100%",
            }}
            onChange={(e) => {
              if (!videoRef.current) {
                return;
              }

              videoRef.current.currentTime =
                (Number(e.target.value) / 100) * videoRef.current.duration;
              setProgress(Number(e.target.value));
            }}
            onMouseUp={() => {
              if (!videoRef.current) {
                return;
              }

              videoRef.current.play();
              videoRef.current.muted = false;
            }}
            onMouseDown={() => {
              if (!videoRef.current) {
                return;
              }

              videoRef.current.pause();
              videoRef.current.muted = true;
            }}
            type="range"
            value={progress}
            min="0"
            max="100"
          />
        </BottomBar>
      )}
    </VideoWrapper>
  );
}

export default VideosPage;
