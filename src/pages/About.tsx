import Header from "../components/Header";
import arch3 from "../assets/arch3.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <div className="relative min-h-screen flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${arch3})` }}
          >
            <div className="absolute inset-0 bg-primary/60" />
          </div>
          
          <div className="relative z-10 container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background/90 backdrop-blur-sm p-8 md:p-16 rounded-lg">
                <h1 className="heading-primary text-primary mb-8 animate-fade-in">
                  About Nihaara Architects
                </h1>
                
                <div className="space-y-6 animate-slide-up">
                  <p className="body-text text-muted-foreground leading-relaxed">
                    Nihaara Architects is a premier architectural design studio dedicated to creating spaces that transcend the ordinary. Our philosophy centers on the belief that great architecture is born from the intersection of innovative design, cultural sensitivity, and environmental consciousness.
                  </p>
                  
                  <p className="body-text text-muted-foreground leading-relaxed">
                    Founded on the principle that every space tells a story, we specialize in crafting environments that not only meet functional requirements but also inspire and elevate the human experience. Our diverse portfolio spans residential, commercial, traditional, and landscape architecture, each project reflecting our commitment to excellence and attention to detail.
                  </p>
                  
                  <p className="body-text text-muted-foreground leading-relaxed">
                    At Nihaara Architects, we believe in collaborative design processes that honor our clients' visions while pushing the boundaries of architectural innovation. Our team combines deep technical expertise with creative vision to deliver projects that stand as testaments to thoughtful design and meticulous craftsmanship.
                  </p>
                  
                  <p className="body-text text-muted-foreground leading-relaxed">
                    We are passionate about creating sustainable, beautiful, and functional spaces that serve communities and respect their cultural context. Every project is an opportunity to contribute to the built environment in a meaningful way, creating edges of today that will become echoes of tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;