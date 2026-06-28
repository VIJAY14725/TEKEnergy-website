import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Logo from "@/assets/images/Header/Logo.png"

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/">
              <img
              src={Logo}
              alt="TEKenergy - Our people make IT happen"
              className="h-20 w-auto object-contain"
            />
            </Link>

            <p className="mt-4 text-muted-foreground max-w-xs leading-relaxed">
              Leading force in revolutionizing the Energy & Utilities sector with innovative technology solutions.
            </p>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Quick links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-lg mb-4 block">Contact</span>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@tekenergyusa.com</li>
              <a
                            href="tel:+12144557623"
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                           Phone: +1 (214) 455-7623
                          </a>

            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/tekenergy-inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@tekenergy.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 TEKenergy LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;