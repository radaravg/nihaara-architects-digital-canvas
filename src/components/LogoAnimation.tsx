import { useEffect, useState } from "react";

interface LogoAnimationProps {
  onComplete: () => void;
}

const LogoAnimation = ({ onComplete }: LogoAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] bg-background flex items-center justify-center transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="animate-zoom-in">
        <img 
          src="/lovable-uploads/nihaara-logo.png" 
          alt="Nihaara Architects" 
          className="h-24 md:h-40 w-auto animate-float"
        />
      </div>
    </div>
  );
};

export default LogoAnimation;