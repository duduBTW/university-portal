import { Embed } from "./Pdf.styles";

type MaterialPdfProps = {
  src: string;
};

function MaterialPdf(props: MaterialPdfProps) {
  const { src } = props;

  return <Embed src={src} type="application/pdf" />;
}

export default MaterialPdf;
