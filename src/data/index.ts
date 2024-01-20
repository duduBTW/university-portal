import { useOutletContext } from "react-router";
import { Course } from "./fetcher";

function useCourse() {
  return useOutletContext<Course>();
}

export default useCourse;
