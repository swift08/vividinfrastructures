import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Building2, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsla(220, 10%, 15%, 0.95)`);
      gradient.addColorStop(0.5, `hsla(38, 65%, 50%, ${0.1 + Math.sin(time) * 0.05})`);
      gradient.addColorStop(1, `hsla(220, 10%, 15%, 0.95)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated radial gradients
      const radial1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time) * 50,
        canvas.height * 0.3 + Math.cos(time) * 50,
        0,
        canvas.width * 0.2 + Math.sin(time) * 50,
        canvas.height * 0.3 + Math.cos(time) * 50,
        200
      );
      radial1.addColorStop(0, `hsla(38, 80%, 70%, ${0.15 + Math.sin(time) * 0.1})`);
      radial1.addColorStop(1, "transparent");
      ctx.fillStyle = radial1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const radial2 = ctx.createRadialGradient(
        canvas.width * 0.8 + Math.cos(time * 0.8) * 50,
        canvas.height * 0.7 + Math.sin(time * 0.8) * 50,
        0,
        canvas.width * 0.8 + Math.cos(time * 0.8) * 50,
        canvas.height * 0.7 + Math.sin(time * 0.8) * 50,
        200
      );
      radial2.addColorStop(0, `hsla(38, 70%, 60%, ${0.1 + Math.cos(time) * 0.08})`);
      radial2.addColorStop(1, "transparent");
      ctx.fillStyle = radial2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(38, 80%, 70%, ${particle.opacity + Math.sin(time + particle.x) * 0.2})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <footer className="relative bg-vivid-charcoal-dark text-white overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "overlay" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-8 h-8 text-vivid-gold" />
              <h3 className="text-2xl font-bold font-heading text-white">
                Vivid <span className="text-vivid-gold">Infrastructures</span>
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Building trust, brick by brick. Your dream home, built with reliability and
              transparency.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/vividinfrastructures/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-vivid-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Vivid-Infrastructures/61574752753445/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-vivid-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Projects", href: "#projects" },
                { name: "Team", href: "#team" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-vivid-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading text-white">Services</h4>
            <ul className="space-y-3">
              {[
                "Residential Construction",
                "Quality Assurance",
                "Project Management",
                "Consultation",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-vivid-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Netaji Circle, Kanakadasa Nagar,
                  <br />
                  Mysuru, Karnataka 570023
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-vivid-gold flex-shrink-0" />
                <a
                  href="tel:+917892618532"
                  className="text-white/70 hover:text-vivid-gold transition-colors duration-300 text-sm"
                >
                  +91 78926 18532
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-vivid-gold flex-shrink-0" />
                <a
                  href="tel:+919945125369"
                  className="text-white/70 hover:text-vivid-gold transition-colors duration-300 text-sm"
                >
                  +91 99451 25369
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-vivid-gold flex-shrink-0" />
                <a
                  href="mailto:vividstruct@gmail.com"
                  className="text-white/70 hover:text-vivid-gold transition-colors duration-300 text-sm"
                >
                  vividstruct@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Vivid Infrastructures. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Built with <span className="text-vivid-gold">trust</span> and{" "}
            <span className="text-vivid-gold">transparency</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
