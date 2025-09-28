import { useState, useEffect } from "react";
import Header from "../components/Header";
import ImageSlideshow from "../components/ImageSlideshow";
import LogoAnimation from "../components/LogoAnimation";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      {!showContent && <LogoAnimation onComplete={handleAnimationComplete} />}
      
      {showContent && (
        <div className="min-h-screen relative">
          <Header />
          <ImageSlideshow />
          
          <div className="relative z-10 min-h-screen flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl">
              <div className="mb-8">
                <p className="text-white/80 text-sm md:text-base tracking-wider uppercase mb-4 animate-fade-in">
                  ARCHITECTURAL DESIGN STUDIO
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  DESIGN MATTERS
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  Nihaara is an award winning architectural and interior design studio creating spaces that blend modern innovation with timeless elegance.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;