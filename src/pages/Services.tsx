import { useEffect, useRef } from "react";
import Header from "../components/Header";
import arch1 from "../assets/arch1.jpg";
import arch2 from "../assets/arch2.jpg";
import arch3 from "../assets/arch3.jpg";
import arch4 from "../assets/arch4.jpg";
import arch5 from "../assets/arch5.jpg";

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Residential Building",
      description: "Creating homes that blend modern living with timeless design principles.",
      image: arch1,
    },
    {
      title: "Commercial",
      description: "Innovative commercial spaces that inspire productivity and growth.",
      image: arch2,
    },
    {
      title: "Traditional",
      description: "Preserving heritage while embracing contemporary functionality.",
      image: arch3,
    },
    {
      title: "Interior",
      description: "Transforming spaces with thoughtful interior architecture.",
      image: arch4,
    },
    {
      title: "Landscape",
      description: "Harmonizing built environments with natural landscapes.",
      image: arch5,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = servicesRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <div className="container-custom py-12 md:py-20">
          <div className="mb-16 text-center">
            <h1 className="heading-primary mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="body-text text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              We offer comprehensive architectural solutions tailored to your unique vision and requirements.
            </p>
          </div>

          <div ref={servicesRef} className="space-y-0">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`relative min-h-screen flex items-center fade-in ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-primary/50" />
                </div>
                
                <div className={`relative z-10 max-w-md p-8 md:p-12 ${
                  index % 2 === 0 ? "ml-0 md:ml-12" : "mr-0 md:mr-12"
                }`}>
                  <div className="bg-background/90 backdrop-blur-sm p-8 rounded-lg">
                    <h2 className="heading-secondary text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="body-text text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;