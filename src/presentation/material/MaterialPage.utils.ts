import { useParams } from "react-router";
import useCourse from "../../data";

export function useMaterial() {
  const { materialId } = useParams();

  const { materials } = useCourse();

  const material = materials.content.find(
    (material) => String(material.id) === materialId
  );
  if (!material) {
    throw new Error("Material not found");
  }

  return material;
}
