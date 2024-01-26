import { useEffect, useRef } from "react";
import { sanitize } from "dompurify";
import { Container } from "./Html.styles";

type MaterialHtmlProps = {
  src: () => string;
};

function MaterialHtml(props: MaterialHtmlProps) {
  const { src } = props;
  const htmlContent = src();

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

  return <Container ref={shadowContainerRef} />;
}

export default MaterialHtml;
