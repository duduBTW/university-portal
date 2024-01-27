import { useEffect, useRef } from "react";
import { sanitize } from "dompurify";
import { Container } from "./Html.styles";

type MaterialHtmlProps = {
  src: string | (() => string);
};

function MaterialHtml(props: MaterialHtmlProps) {
  const { src } = props;

  const shadowContainerRef = useRef<HTMLDivElement>(null);

  const htmlContent = typeof src === "string" ? src : src();

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
