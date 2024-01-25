import useCourse from "../data";
import { Course, Material, Media } from "../data/fetcher";

export function useVideoUrl(video: Media) {
  const course = useCourse();
  return getVideoUrl(course, video);
}

export function getVideoUrl(course: Course, video: Media) {
  return `/${course.id}/video/${video.id}`;
}

export function getMaterialUrl(course: Course, material: Material) {
  return `/${course.id}/material/${material.id}`;
}
