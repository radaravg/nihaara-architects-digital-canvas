import { useEffect, useRef } from "react";
import Header from "../components/Header";
import arch1 from "../assets/arch1.jpg";
import arch2 from "../assets/arch2.jpg";
import arch3 from "../assets/arch3.jpg";
import arch4 from "../assets/arch4.jpg";
import arch5 from "../assets/arch5.jpg";

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);

  const projects = [
    { title: "Modern Residential Complex", image: arch1, category: "Residential" },
    { title: "Corporate Headquarters", image: arch2, category: "Commercial" },
    { title: "Heritage Villa Restoration", image: arch3, category: "Traditional" },
    { title: "Luxury Interior Design", image: arch4, category: "Interior" },
    { title: "Urban Landscape Park", image: arch5, category: "Landscape" },
    { title: "Contemporary Office Space", image: arch1, category: "Commercial" },
    { title: "Private Residence", image: arch2, category: "Residential" },
    { title: "Cultural Center", image: arch3, category: "Traditional" },
    { title: "Minimalist Interior", image: arch4, category: "Interior" },
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

    const elements = portfolioRef.current?.querySelectorAll(".fade-in");
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
              Portfolio
            </h1>
            <p className="body-text text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Explore our collection of architectural projects that showcase innovation, elegance, and functionality.
            </p>
          </div>

          <div 
            ref={portfolioRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer fade-in"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-90">
                        {project.category}
                      </p>
                    </div>
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

export default Portfolio;