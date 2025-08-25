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
          
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
            <div className="text-center px-6 mb-8">
              <img 
                src="/lovable-uploads/nihaara-logo.png" 
                alt="Nihaara Architects" 
                className="h-24 md:h-32 lg:h-40 w-auto mx-auto animate-fade-in"
              />
            </div>
            <div className="text-center px-6">
              <h1 className="tagline text-white animate-fade-in">
                Edges of today, echoes of tomorrow.
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;