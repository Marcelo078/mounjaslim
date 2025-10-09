import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Mounja Slim
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth">
              Início
            </Link>
            <Link to="/artigos" className="text-foreground hover:text-primary transition-smooth">
              Artigos
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </Link>
            <Button variant="cta" size="sm" asChild>
              <a href="https://app.monetizze.com.br/r/AJZ25504136" target="_blank" rel="noopener noreferrer">
                Garantir Oferta
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/artigos"
              className="block text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Artigos
            </Link>
            <Link
              to="/sobre"
              className="block text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Button variant="cta" size="sm" className="w-full" asChild>
              <a href="https://app.monetizze.com.br/r/AJZ25504136" target="_blank" rel="noopener noreferrer">
                Garantir Oferta
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
