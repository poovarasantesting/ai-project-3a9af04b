import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Portfolio</span>
        </Link>
        
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Toggle menu</span>
        </Button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex md:gap-6">
          {routes.map((route) => (
            <Link 
              key={route.path}
              to={route.path}
              className={cn(
                "text-md font-medium transition-colors hover:text-primary",
                location.pathname === route.path ? "text-primary" : "text-muted-foreground"
              )}
            >
              {route.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute inset-x-0 top-16 z-50 bg-background border-b md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={cn(
                    "text-md font-medium transition-colors hover:text-primary p-2",
                    location.pathname === route.path ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}