import { useEffect, useRef } from "react";

export default function GravityCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const particles = [];
    const numParticles = 50;
    let mouse = { x: null, y: null };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Resize handler
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Track mouse movement
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Particle constructor
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 0.3 + Math.random() * 1.5;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
      }

      update() {
        // Move normally
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce from edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Apply gravity attraction to mouse
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            this.x += dx / 18;
            this.y += dy / 18;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgba(27, 34, 41, 0.7)";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Populate particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="gravity-canvas"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
}
