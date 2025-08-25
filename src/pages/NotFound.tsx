import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="heading-primary text-primary mb-4">404</h1>
        <p className="body-text text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button 
          onClick={() => window.location.href = "/"}
          variant="outline"
          className="hover:bg-primary hover:text-primary-foreground"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
