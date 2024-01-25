import useCourse from "../../data";

export function useVideo(videoId: string | undefined) {
  const { media } = useCourse();

  const video = media.content.find((video) => String(video.id) === videoId);
  if (!video) {
    throw new Error("Video not found");
  }

  return video;
}

export function useNextVideo(videoId: string | undefined) {
  const { media } = useCourse();

  if (videoId === undefined) {
    return;
  }

  const currentVideoIndex = media.content.findIndex(
    (video) => String(video.id) === videoId
  );
  if (currentVideoIndex === -1) {
    return;
  }

  // next video index
  return media.content[currentVideoIndex + 1];
}
