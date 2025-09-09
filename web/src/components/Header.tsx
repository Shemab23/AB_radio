import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Upcoming", href: "#upcoming" },
    { name: "About us", href: "#about" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="AB logo.png" 
              alt="AB Radio Logo" 
              className="h-10 w-10 rounded-full shadow-sm"
            />
            <span className="text-xl font-bold text-primary">AB Radio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium transition-smooth hover:text-secondary text-muted-foreground"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Listen Now Button */}
          <div className="hidden md:block">
            <Button variant="secondary" size="sm">
              Listen Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted/50 transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 mt-4 pt-4">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium transition-smooth hover:text-secondary text-muted-foreground text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="secondary" size="sm" className="w-fit">
                Listen Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;