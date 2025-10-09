import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text?: string;
  className?: string;
}

const CTAButton = ({ 
  text = "Aproveite Esta Oferta Agora", 
  className = "" 
}: CTAButtonProps) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <Button 
        variant="cta" 
        size="lg" 
        className="w-full max-w-md"
        asChild
      >
        <a 
          href="https://app.monetizze.com.br/r/AJZ25504136" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {text}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};

export default CTAButton;
