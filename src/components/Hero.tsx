import { useEffect, useRef, useState } from "react";
import { Phone, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-house.jpg";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    
    // Construction grid pattern
    const gridSize = 50;
    const gridOffset = { x: 0, y: 0 };

    // Floating construction elements
    const elements: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      type: "brick" | "beam";
    }> = [];

    // Create construction elements
    for (let i = 0; i < 8; i++) {
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 20 + 15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        type: Math.random() > 0.5 ? "brick" : "beam",
      });
    }

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animated grid (blueprint style)
      gridOffset.x = Math.sin(time) * 10;
      gridOffset.y = Math.cos(time) * 10;

      ctx.strokeStyle = `hsla(38, 80%, 70%, ${0.08 + Math.sin(time * 2) * 0.04})`;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = gridOffset.x % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = gridOffset.y % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Animate construction elements
      elements.forEach((element) => {
        element.x += element.vx;
        element.y += element.vy;
        element.rotation += element.rotationSpeed;

        // Wrap around edges
        if (element.x < -element.size) element.x = canvas.width + element.size;
        if (element.x > canvas.width + element.size) element.x = -element.size;
        if (element.y < -element.size) element.y = canvas.height + element.size;
        if (element.y > canvas.height + element.size) element.y = -element.size;

        ctx.save();
        ctx.translate(element.x, element.y);
        ctx.rotate(element.rotation);

        const opacity = 0.15 + Math.sin(time + element.x * 0.01) * 0.1;
        ctx.fillStyle = `hsla(38, 70%, 60%, ${opacity})`;
        ctx.strokeStyle = `hsla(38, 80%, 70%, ${opacity * 1.5})`;
        ctx.lineWidth = 2;

        if (element.type === "brick") {
          // Draw brick shape
          ctx.fillRect(-element.size / 2, -element.size / 3, element.size, element.size / 1.5);
          ctx.strokeRect(-element.size / 2, -element.size / 3, element.size, element.size / 1.5);
          // Brick lines
          ctx.beginPath();
          ctx.moveTo(0, -element.size / 3);
          ctx.lineTo(0, element.size / 3);
          ctx.stroke();
        } else {
          // Draw beam shape (I-beam)
          const beamWidth = element.size * 0.3;
          const beamHeight = element.size;
          // Top flange
          ctx.fillRect(-element.size / 2, -beamHeight / 2, element.size, beamWidth);
          ctx.strokeRect(-element.size / 2, -beamHeight / 2, element.size, beamWidth);
          // Web
          ctx.fillRect(-beamWidth / 2, -beamHeight / 2, beamWidth, beamHeight);
          ctx.strokeRect(-beamWidth / 2, -beamHeight / 2, beamWidth, beamHeight);
          // Bottom flange
          ctx.fillRect(-element.size / 2, beamHeight / 2 - beamWidth, element.size, beamWidth);
          ctx.strokeRect(-element.size / 2, beamHeight / 2 - beamWidth, element.size, beamWidth);
        }

        ctx.restore();
      });

      // Subtle radial gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.6
      );
      gradient.addColorStop(0, "transparent");
      gradient.addColorStop(1, `hsla(220, 10%, 15%, ${0.3 + Math.sin(time) * 0.1})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75 ease-out"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-vivid-charcoal-dark/85 via-vivid-charcoal-dark/75 to-vivid-charcoal-dark/90" />
        {/* Subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-vivid-gold/5 to-vivid-gold/10" />
      </div>

      {/* Live Animated Canvas - Civil Engineering Theme */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Subtle Geometric Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-vivid-gold/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full border border-vivid-gold/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24 md:pt-28">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-vivid-gold/10 border border-vivid-gold/30 backdrop-blur-sm animate-fade-up">
            <Building2 className="w-4 h-4 text-vivid-gold" />
            <span className="text-sm font-semibold text-vivid-gold">Premium Construction</span>
          </div>

          {/* Main Title - Better Typography */}
          <div className="space-y-4 animate-fade-up-delayed">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-heading leading-tight">
              Building Trust,
              <br />
              <span className="text-gradient-gold">Brick by Brick</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-up-delayed-2">
            At <span className="font-semibold text-vivid-gold">Vivid Infrastructures</span>, we turn
            visions into reality with reliability and transparency. Your dream home, built with trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-up-delayed-3">
            <Button
              size="lg"
              className="group bg-vivid-gold hover:bg-vivid-gold-light text-white gap-2 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="tel:+917892618532" className="flex items-center">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:border-white/50"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View Projects
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Stats - Better Integration */}
          <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-white/10 max-w-2xl mx-auto animate-fade-up-delayed-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-vivid-gold mb-1">12+</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vivid-gold mb-1">100%</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vivid-gold mb-1">7+</div>
              <div className="text-sm text-white/70 uppercase tracking-wider">Years Exp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="text-xs text-white/60 uppercase tracking-wider">Scroll</div>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-white/5">
          <div className="w-1.5 h-3 bg-vivid-gold rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
