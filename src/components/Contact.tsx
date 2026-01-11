import { MapPin, Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-8 md:py-10 bg-vivid-charcoal-dark text-secondary-foreground relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 right-0 w-96 h-96 bg-vivid-gold/5 rounded-full blur-3xl transition-all duration-1000 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-8 font-heading text-background transition-all duration-700 delay-200 ${
                leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Get In <span className="text-gradient-gold">Touch</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  content: (
                    <>
                      <p className="text-background">Netaji Circle, Kanakadasa Nagar,</p>
                      <p className="text-primary">Mysuru, Karnataka 570023, India</p>
                    </>
                  ),
                  href: null,
                },
                {
                  icon: Phone,
                  content: "+91 78926 18532",
                  href: "tel:+917892618532",
                },
                {
                  icon: Phone,
                  content: "+91 99451 25369",
                  href: "tel:+919945125369",
                },
                {
                  icon: Mail,
                  content: "vividstruct@gmail.com",
                  href: "mailto:vividstruct@gmail.com",
                },
                {
                  icon: Mail,
                  content: "eo@vividinfrastructures.com",
                  href: "mailto:eo@vividinfrastructures.com",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
                const Component = item.href ? "a" : "div";

                return (
                  <Component
                    key={index}
                    ref={ref}
                    href={item.href || undefined}
                    className={`group premium-card flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-background group-hover:text-primary transition-colors duration-300">
                      {item.content}
                    </div>
                  </Component>
                );
              })}
            </div>

            {/* Social Links */}
            <div
              className={`mt-10 transition-all duration-700 delay-800 ${
                leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-background font-heading">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    href: "https://www.instagram.com/vividinfrastructures/",
                    icon: (
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
                  },
                  {
                    href: "https://www.facebook.com/people/Vivid-Infrastructures/61574752753445/",
                    icon: (
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                    bg: "bg-blue-600",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group premium-card w-12 h-12 rounded-full ${social.bg} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            ref={rightRef}
            className={`transition-all duration-1000 ${
              rightVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-4 text-background font-heading transition-all duration-700 delay-200 ${
                rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Find Us
            </h3>
            <div
              className={`premium-card rounded-xl overflow-hidden shadow-lg h-[400px] hover:shadow-2xl transition-all duration-500 ${
                rightVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4833387776847!2d76.60374!3d12.2809723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf650a95844c0d%3A0x154d7c288cf558c5!2sVivid%20Infrastructures!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vivid Infrastructures Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
