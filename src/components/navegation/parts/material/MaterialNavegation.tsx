import { useParams } from "react-router";
import { Course } from "../../../../data/fetcher";
import { Container, MaterialItem } from "./MaterialNavegation.styles";
import { getMaterialUrl } from "../../../../utils/path";

type MaterialNavegationProps = {
  course: Course;
};

function MaterialNavegation(props: MaterialNavegationProps) {
  const {
    course: {
      materials: { content: materials },
    },
    course,
  } = props;
  const { materialId: currentMaterialId } = useParams();

  const content = materials.map((material) => {
    return (
      <MaterialItem
        to={getMaterialUrl(course, material)}
        key={material.id}
        isActive={currentMaterialId === String(material.id)}
      >
        {material.title}
      </MaterialItem>
    );
  });

  return <Container>{content}</Container>;
}

export default MaterialNavegation;
