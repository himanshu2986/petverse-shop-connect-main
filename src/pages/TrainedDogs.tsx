import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const TrainedDogs = () => {
  const images = [
    { src: "/assets/trained-dog.jpg", position: "object-bottom" },
    { src: "/assets/trained-dog.jpg", position: "object-center" },
    { src: "/assets/trained-dog.jpg", position: "object-[50%_75%]" },
  ];


  return (
    <div>
      <PageBanner title="Our Trained Dogs" imageUrl="/assets/trained-dog.jpg" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Carousel className="w-full max-w-xl mx-auto mb-8">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image.src}
                      alt={`Trained dog ${index + 1}`}
                      className={`w-full h-80 object-cover rounded-lg ${image.position}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Request a Trained Dog</h2>
            <p className="text-muted-foreground mb-4">
              Our expertly trained dogs are more than just pets—they are life-changers. From assisting individuals with disabilities to providing therapeutic comfort, our dogs are making a tangible difference in the community every single day.
            </p>
            <p className="text-muted-foreground mb-8">
              If you are in need of a trained dog, please contact us to discuss your requirements. We work closely with you to find the perfect match.
            </p>
            <Link to="/contact-us">
              <Button>Request a Trained Dog</Button>
            </Link>
          </div>
        </div>



      </div>
    </div>
  );
};

export default TrainedDogs;
