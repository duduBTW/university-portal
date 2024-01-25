import { useParams } from "react-router";
import { Material } from "../../../../data/fetcher";
import { Container, MaterialItem } from "./MaterialNavegation.styles";

type MaterialNavegationProps = {
  materials: Material[];
};

function MaterialNavegation(props: MaterialNavegationProps) {
  const { materials } = props;
  const { materialId } = useParams();

  const content = materials.map((material) => (
    <MaterialItem
      key={material.id}
      isActive={materialId === String(material.id)}
    >
      {material.title}
    </MaterialItem>
  ));

  return <Container>{content}</Container>;
}

export default MaterialNavegation;
