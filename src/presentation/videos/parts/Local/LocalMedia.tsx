import Button from "../../../../components/button/Button";
import { Video, MediaError } from "./LocalMedia.styles";
import { useVideo } from "../../VideosPage.utils";
import { useRef, useState } from "react";
import SectionError from "../../../error/Section/SectionError";

function LocalMedia() {
  const { source, type, thumbnail } = useVideo();
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

  if (error) {
    return (
      <SectionError>Video failed to load</SectionError>
      // <MediaError>
      //   <h2>Something went wrong!</h2>
      //   <Button onClick={() => setError(false)}>Try again!</Button>
      // </MediaError>
    );
  }

  return (
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
  );
}

/* {hovering && (
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
      )} */

export default LocalMedia;
