
import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const TrainedDogs = () => {
  const images = [
    { src: "/assets/rescue 1.jpg", position: "object-bottom" },
    { src: "/assets/rescue 2.jpg", position: "object-center" },
    { src: "/assets/rescue 3.jpg", position: "object-[50%_75%]" },
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
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground mb-4">
              We are incredibly proud of the work our trained dogs do. They are not just animals; they are heroes in their own right. Our dogs have been placed in various roles, from service animals for individuals with disabilities to therapy dogs in hospitals and schools.
            </p>
            <p className="text-muted-foreground mb-8">
              Each dog undergoes a rigorous training program tailored to its future role. We work closely with government bodies and non-profit organizations to ensure our dogs meet the highest standards of training and temperament.
            </p>
            <Link to="/contact-us">
              <Button>Contact Us to Learn More</Button>
            </Link>
          </div>
        </div>



      </div>
    </div>
  );
};

export default TrainedDogs;
