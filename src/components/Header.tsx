import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";
import NavigationMenu from "./NavigationMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/services":
        return "Services";
      case "/portfolio":
        return "Portfolio";
      case "/about":
        return "About";
      case "/contact":
        return "Contact";
      default:
        return "Home";
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container-custom flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center">
            {location.pathname !== "/" && (
              <button 
                onClick={() => navigate('/')}
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src="/lovable-uploads/nihaara-logo.png" 
                  alt="Nihaara Architects" 
                  className="h-8 md:h-10 w-auto animate-fade-in"
                />
              </button>
            )}
          </div>
          
          <div className="hidden md:block">
            {location.pathname === "/" ? (
              <button 
                onClick={() => navigate('/')}
                className="hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src="/lovable-uploads/nihaara-logo.png" 
                  alt="Nihaara Architects" 
                  className="h-8 md:h-10 w-auto animate-fade-in"
                />
              </button>
            ) : (
              <span className="body-text font-medium text-muted-foreground">
                {getPageName()}
              </span>
            )}
          </div>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-muted rounded-md transition-colors duration-300"
            aria-label="Open menu"
          >
            <MoreHorizontal className="h-6 w-6" />
          </button>
        </div>
      </header>
      
      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};

export default Header;