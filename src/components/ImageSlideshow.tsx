import { useState, useEffect } from "react";
import arch1 from "../assets/arch1.jpg";
import arch2 from "../assets/arch2.jpg";
import arch3 from "../assets/arch3.jpg";
import arch4 from "../assets/arch4.jpg";
import arch5 from "../assets/arch5.jpg";

const ImageSlideshow = () => {
  const images = [arch1, arch2, arch3, arch4, arch5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            currentImage === index 
              ? "translate-x-0" 
              : index < currentImage 
                ? "-translate-x-full" 
                : "translate-x-full"
          }`}
        >
          <img
            src={image}
            alt={`Architecture ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-dark" />
        </div>
      ))}
    </div>
  );
};

export default ImageSlideshow;