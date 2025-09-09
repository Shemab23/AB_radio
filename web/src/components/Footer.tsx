import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";
import abRadioLogo from "@/assets/ab-radio-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Upcoming", href: "/upcoming" },
    { name: "Listen Live", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={abRadioLogo} 
                alt="AB Radio Logo" 
                className="h-12 w-12 rounded-full"
              />
              <span className="text-2xl font-bold">AB Radio</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Tune in to AB Radio - your 24/7 stream for uplifting church messages, worship, and inspiration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-primary-foreground/10 p-2 rounded-full hover:bg-secondary transition-smooth"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shortcuts */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shortcuts</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-smooth"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-smooth"
              >
                <Youtube className="h-4 w-4" />
                <span>YouTube</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-smooth"
              >
                <Facebook className="h-4 w-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@abradio.com</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+250 78......</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>..., ....</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            Copyright {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;