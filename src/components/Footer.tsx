
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/sujithvaishnav', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sujith-vaishnav-malla-b0801b28a/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sujithvaishnavmalla@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-yellow-400 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Sujith Vaishnav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
