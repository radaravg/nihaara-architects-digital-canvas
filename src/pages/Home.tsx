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