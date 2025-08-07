import React, { useRef, useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

const Background = ({ children, className }) => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
    });

    const temp = Array.from({ length: 100 }, createParticle);
    setParticles(temp);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      temp.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "#a855f7"; // beam color
        ctx.fill();
        ctx.closePath();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x + p.radius > canvas.width || p.x - p.radius < 0) p.dx *= -1;
        if (p.y + p.radius > canvas.height || p.y - p.radius < 0) p.dy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className={cn("fixed inset-0 -z-10 bg-black", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
