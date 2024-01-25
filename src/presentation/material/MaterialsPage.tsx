import { useAsyncResource } from "use-async-resource";
import { useMaterial } from "./MaterialPage.utils";
import { Container } from "./MaterialsPage.styles";
import { Material } from "../../data/fetcher";
import { Suspense, useEffect, useRef } from "react";
import { sanitize } from "dompurify";

const TypeToContentMap: Record<
  Material["type"],
  (props: ViwerProps) => JSX.Element
> = {
  html: Html,
  pdf: Pdf,
};

function MaterialsPage() {
  const { id, source, type } = useMaterial();
  const [htmlReader] = useAsyncResource(
    () => fetch(source).then((res) => res.text()),
    []
  );

  const Content = TypeToContentMap[type];

  return (
    <Container key={id}>
      <Suspense fallback={<div>loading...</div>}>
        <Content htmlReader={htmlReader} source={source} />
      </Suspense>
    </Container>
  );
}

type ViwerProps = {
  source: string;
  htmlReader: any;
};

function Html(props: ViwerProps) {
  const { htmlReader } = props;

  const htmlContent = htmlReader();

  const shadowContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shadowContainer = shadowContainerRef.current;

    if (!shadowContainer) {
      return;
    }

    const shadowRoot = shadowContainer.attachShadow({ mode: "open" });
    const sanitizedHTMLContent = sanitize(htmlContent);
    shadowRoot.innerHTML = sanitizedHTMLContent;
  }, [htmlContent]);

  return <div ref={shadowContainerRef} />;
}
function Pdf(props: ViwerProps) {
  const { source } = props;

  return (
    <embed
      style={{
        width: "100%",
        height: "100vh",
      }}
      src={source}
      type="application/pdf"
    />
  );
}

export default MaterialsPage;
