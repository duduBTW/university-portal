import { useParams } from "react-router";
import { Course } from "../../../../data/fetcher";
import { Container, Thumbnail, Title, Video } from "./Videos.styles";
import { getVideoUrl } from "../../../../utils/path";

type VideosNavegationProps = {
  course: Course;
};

function VideosNavegation(props: VideosNavegationProps) {
  const {
    course: {
      media: { content: videos },
    },
    course,
  } = props;

  const { videoId: activeVideoId } = useParams();

  const content = videos.map((video) => (
    <Video
      key={video.id}
      to={getVideoUrl(course, video)}
      isActive={activeVideoId === String(video.id)}
    >
      <Thumbnail src={video.thumbnail} />
      <Title isActive={activeVideoId === String(video.id)}>{video.title}</Title>
    </Video>
  ));

  return <Container>{content}</Container>;
}

export default VideosNavegation;
