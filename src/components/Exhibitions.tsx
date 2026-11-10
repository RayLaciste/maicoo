import { useEffect, useMemo, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";

type Exhibition = {
  title: string;
  images: string[];
  direction: "forward" | "backward";
};

const exhibitions: Exhibition[] = [
  {
    title: "Parts of Me",
    images: [
      "/images/BlameItOnTheSun.jpg",
      "/images/BoundbyFlesh.jpg",
      "/images/ByDesign.jpg",
      "/images/IntoDissolution.jpg",
      "/images/ScrapYard.jpg",
      "/images/UndertheStairs.jpg",
      "/images/UndertheTable.jpg",
    ],
    direction: "forward",
  },
  {
    title: "Heart of Pulp",
    images: [
      "/images/FleshoftheFruit.jpeg",
      "/images/HeartofPulp.jpeg",
      "/images/ObjectofDesire.jpg",
      "/images/TheConsumed.jpg",
      "/images/TheConsumer.jpg",
      "/images/ToBeWanted3.jpg",
      "/images/ToBeWanted2.jpg",
      "/images/ToBeWanted1.jpg",
    ],
    direction: "backward",
  },
  {
    title: "Misc.",
    images: [
      "/images/FigureStudy.jpg",
      "/images/LoungingFigure.jpg",
      "/images/RecliningNude.jpg",
      "/images/SeatedFigure.jpg",
    ],
    direction: "forward",
  },
];

const AUTO_SCROLL_ENABLED = true;

const ExhibitionCarousel = ({ title, images, direction }: Exhibition) => {
  const [api, setApi] = useState<CarouselApi>();
  const autoScroll = useMemo(
    () =>
      AutoScroll({
        speed: 0.25,
        direction,
        startDelay: 0,
        playOnInit: true,
        stopOnFocusIn: false,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [],
  );
  const loopedImages = [...images, ...images];

  useEffect(() => {
    api?.plugins().autoScroll?.play(0);
  }, [api]);

  return (
    <section className="space-y-5">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <Carousel
        opts={{ align: "start", loop: true, dragFree: true }}
        plugins={AUTO_SCROLL_ENABLED ? [autoScroll] : []}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {loopedImages.map((image, index) => (
            <CarouselItem key={`${image}-${index}`} className="basis-auto pl-3">
              <img
                src={image}
                alt={`${title} ${(index % images.length) + 1}`}
                className="h-64 w-auto max-w-[80vw] object-contain sm:h-80"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

const Exhibitions = () => (
  <main className="min-h-screen w-full bg-black px-6 py-12 sm:px-12">
    <div className="mx-auto max-w-7xl space-y-10">
      {exhibitions.map((exhibition, index) => (
        <div key={exhibition.title}>
          <ExhibitionCarousel {...exhibition} />
          {index < exhibitions.length - 1 && (
            <div role="separator" className="mt-10 h-px w-full bg-white/30" />
          )}
        </div>
      ))}
    </div>
  </main>
);

export default Exhibitions;
