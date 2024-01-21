import linearScale from "../../../../utils/linear-scale";
import leftImage from "../../../../data/left.svg";
import rightImage from "../../../../data/right.svg";
import { Left, Right } from "./HomeBackground.styles";
import { useScrollProgress } from "./HomeBackground.utils";

function HomeBackgroundEffect() {
  const scrollProgress = useScrollProgress();
  const yOffset = linearScale(scrollProgress, [0, 1], [0, -64]);

  const style: React.CSSProperties = {
    transform: `translateY(${yOffset}px)`,
  };

  return (
    <>
      <Left style={style}>
        <img src={leftImage} />
      </Left>
      <Right style={style}>
        <img src={rightImage} />
      </Right>
    </>
  );
}

export default HomeBackgroundEffect;
