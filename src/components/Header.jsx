import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';
import { 
  Menu, ChevronDown, Brain, Zap, Cloud, Settings, 
  Wrench, BarChart3, Users, HardDrive, Code, CheckCircle 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from "@/assets/images/Header/Logo.png";

const SERVICES = [
  { name: 'AI Transformation', path: '/services/ai-transformation', icon: Brain, color: 'text-primary' },
  { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap, color: 'text-secondary' },
  { name: 'Cloud Transformation', path: '/services/cloud-transformation', icon: Cloud, color: 'text-accent' },
  { name: 'Managed Services', path: '/services/managed-services', icon: Settings, color: 'text-primary' },
  { name: 'Product Engineering', path: '/services/product-engineering', icon: Wrench, color: 'text-secondary' },
  { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3, color: 'text-accent' },
  { name: 'Flexi Skill Engagement', path: '/services/flexi-skill-engagement', icon: Users, color: 'text-primary' },
  { name: 'Hardware Services', path: '/services/hardware-services', icon: HardDrive, color: 'text-secondary' },
  { name: 'No/Low Code Adoption', path: '/services/no-low-code-adoption', icon: Code, color: 'text-accent' },
  { name: 'Testing as a Service (TaaS)', path: '/services/testing-as-a-service', icon: CheckCircle, color: 'text-primary' },
];

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="inline-block">
            <img 
              src={Logo} 
              alt="TEKenergy - Our people make IT happen" 
              className="h-20 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/">
              <Button
                variant="ghost"
                className={cn("transition-all duration-200", isActive('/') ? 'text-primary font-medium bg-primary/10' : 'text-foreground hover:text-primary')}
              >
                Home
              </Button>
            </Link>
            
            <Link to="/about">
              <Button
                variant="ghost"
                className={cn("transition-all duration-200", isActive('/about') ? 'text-primary font-medium bg-primary/10' : 'text-foreground hover:text-primary')}
              >
                About
              </Button>
            </Link>

            <div className="relative group">
              <Link to="/services">
                <Button
                  variant="ghost"
                  className={cn(
                    "transition-all duration-200 group-hover:text-primary", 
                    isServicesActive ? 'text-primary font-medium bg-primary/10' : 'text-foreground hover:text-primary'
                  )}
                >
                  Services
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                </Button>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[600px] z-50">
                <div className="bg-card border border-border shadow-xl rounded-xl p-4 grid grid-cols-2 gap-2">
                  {SERVICES.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors group/item",
                          location.pathname === service.path 
                            ? "bg-primary/10 text-primary" 
                            : "text-card-foreground hover:bg-muted hover:text-primary"
                        )}
                      >
                        <div className="shrink-0 bg-background/50 p-1.5 rounded-md border border-border/50 transition-colors group-hover/item:border-border">
                          <Icon className={cn("w-5 h-5 transition-transform duration-300 group-hover/item:scale-110", service.color)} />
                        </div>
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link to="/contact">
              <Button
                variant="ghost"
                className={cn("transition-all duration-200", isActive('/contact') ? 'text-primary font-medium bg-primary/10' : 'text-foreground hover:text-primary')}
              >
                Contact
              </Button>
            </Link>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card border-border overflow-y-auto">
              <div className="flex flex-col space-y-2 mt-8">
                <Link to="/">
                  <Button variant="ghost" className={cn("w-full justify-start", isActive('/') ? 'text-primary bg-primary/10' : '')}>
                    Home
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="ghost" className={cn("w-full justify-start", isActive('/about') ? 'text-primary bg-primary/10' : '')}>
                    About
                  </Button>
                </Link>
                
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between">
                    <Link to="/services" className="flex-1">
                      <Button variant="ghost" className={cn("w-full justify-start", isActive('/services') ? 'text-primary bg-primary/10' : '')}>
                        Services
                      </Button>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsServicesOpen(!isServicesOpen)} className="shrink-0">
                      <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
                    </Button>
                  </div>
                  
                  {isServicesOpen && (
                    <div className="flex flex-col pl-4 mt-1 border-l border-border/50 ml-4 space-y-1">
                      {SERVICES.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link key={service.path} to={service.path} className="w-full">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className={cn(
                                "w-full justify-start text-sm flex items-center gap-3 group/item", 
                                location.pathname === service.path ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                              )}
                            >
                              <Icon className={cn("w-4 h-4 shrink-0 transition-transform duration-300 group-hover/item:scale-110", service.color)} />
                              <span className="truncate">{service.name}</span>
                            </Button>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Link to="/contact">
                  <Button variant="ghost" className={cn("w-full justify-start", isActive('/contact') ? 'text-primary bg-primary/10' : '')}>
                    Contact
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;