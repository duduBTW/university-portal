import { useAsyncResource } from "use-async-resource";
import { useMaterial } from "./MaterialPage.utils";
import { Container } from "./MaterialsPage.styles";
import { Suspense, useMemo } from "react";
import MaterialHtml from "./parts/Html/Html";
import MaterialPdf from "./parts/Pdf/Pdf";
import { Material } from "../../data/fetcher";

function MaterialsPage() {
  const { id, source, type } = useMaterial();
  const [htmlReader] = useAsyncResource(
    () =>
      fetch(source).then((res) => {
        if (res.status !== 200) {
          throw new Error("");
        }

        return res.text();
      }),
    []
  );

  const Content = useMemo(() => {
    const elementToTypeMap = {
      html: <MaterialHtml src={htmlReader} />,
      pdf: <MaterialPdf src={source} />,
    } as Record<Material["type"], React.ReactElement>;

    return elementToTypeMap[type];
  }, [type, source]);

  return (
    <Container key={id}>
      <Suspense fallback={<div>loading...</div>}>{Content}</Suspense>
    </Container>
  );
}

export default MaterialsPage;
