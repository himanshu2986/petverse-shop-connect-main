import { PageBanner } from "@/components/PageBanner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const RescueDogs = () => {
  const images = [
    { src: "/assets/rescue 1.jpg", position: "object-bottom" },
    { src: "/assets/rescue 2.jpg", position: "object-center" },
    { src: "/assets/rescue 3.jpg", position: "object-[50%_75%]" },
  ];

  return (
    <div>
      <PageBanner title="Our Rescuees" imageUrl="/assets/rescue 1.jpg" />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Meet the People We've Helped</h2>
            <p className="text-muted-foreground mb-8">
                Here are some of the people we have had the privilege to help and support.
            </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image.src}
                  alt={`Rescued person ${index + 1}`}
                  className={`w-full h-96 object-cover rounded-lg ${image.position}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default RescueDogs;
