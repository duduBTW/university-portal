import { Material } from "../../data/fetcher";
import { Container } from "./MaterialsGrid.styles";
import MaterialGridCard from "./parts/card/MaterialsGridCard";

export type MaetrialsGridProps = {
  materials: Material[];
};

function MaterialsGrid(props: MaetrialsGridProps) {
  const { materials } = props;

  const content = materials.map((material) => (
    <MaterialGridCard key={material.id} material={material} />
  ));

  return <Container>{content}</Container>;
}

export default MaterialsGrid;
