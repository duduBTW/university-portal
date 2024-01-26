import { useVideo } from "../../VideosPage.utils";

function YoutubeMedia() {
  const { source } = useVideo();

  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${source}?autoplay=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      // @ts-ignore
      allowfullscreen
    />
  );
}

export default YoutubeMedia;
