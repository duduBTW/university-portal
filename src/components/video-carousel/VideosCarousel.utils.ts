import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export function useCarouselTweenValues(
  emblaApi: EmblaCarouselType | undefined
) {
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const handleScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    handleScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => handleScroll());
    });
    emblaApi.on("reInit", handleScroll);
  }, [emblaApi, handleScroll]);

  return tweenValues;
}

export function useCarouselSelectedIndex(
  emblaApi: EmblaCarouselType | undefined
) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    handleSelect(emblaApi);
    emblaApi.on("reInit", handleSelect);
    emblaApi.on("select", handleSelect);
  }, [emblaApi, handleSelect]);

  return selectedIndex;
}
