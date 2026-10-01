import React, { useEffect, useRef } from 'react';

/**
 * Animated realistic ocean background matching Bien.jpg
 * - Surface ripples and sunlight
 * - Undulating natural water meniscus without dark/black border lines
 * - Smooth deep ocean gradient (no god-ray light shafts)
 * - Gentle floating micro-particles
 */
export const OceanWaterMotion: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles (drifting plankton & micro-bubbles)
    const particleCount = 40;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: height * 0.35 + Math.random() * (height * 0.65),
      radius: Math.random() * 2 + 0.6,
      baseAlpha: Math.random() * 0.35 + 0.15,
      speedY: -(Math.random() * 0.3 + 0.12),
      speedX: (Math.random() - 0.5) * 0.18,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.03 + 0.01
    }));

    let time = 0;

    const render = () => {
      time += 0.016;

      ctx.clearRect(0, 0, width, height);

      const waterLineY = Math.max(height * 0.36, 215);

      // 1. SKY / WATER SURFACE (Top 33%)
      const skyGrad = ctx.createLinearGradient(0, 0, 0, waterLineY);
      skyGrad.addColorStop(0, '#0a5894');
      skyGrad.addColorStop(0.5, '#026ba8');
      skyGrad.addColorStop(1, '#027ebc');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, waterLineY);

      // Sun glint flare (upper right)
      const sunX = width * 0.72 + Math.sin(time * 0.5) * 10;
      const sunY = waterLineY * 0.2;
      const sunGrad = ctx.createRadialGradient(sunX, sunY, 5, sunX, sunY, width * 0.45);
      const sunGlintAlpha = 0.45 + Math.sin(time * 1.5) * 0.08;
      sunGrad.addColorStop(0, `rgba(255, 255, 255, ${sunGlintAlpha})`);
      sunGrad.addColorStop(0.2, 'rgba(186, 230, 253, 0.35)');
      sunGrad.addColorStop(0.6, 'rgba(56, 189, 248, 0.12)');
      sunGrad.addColorStop(1, 'rgba(2, 107, 168, 0)');
      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, width, waterLineY);

      // Surface ripples
      ctx.save();
      ctx.globalAlpha = 0.25;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        const rippleY = waterLineY * (0.25 + i * 0.2) + Math.sin(time * 1.2 + i) * 3;
        ctx.ellipse(
          sunX + Math.sin(time * 0.8 + i) * 60,
          rippleY,
          width * 0.35 + i * 40,
          8 + i * 3,
          0,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
      }
      ctx.restore();

      // 2. UNDERWATER ABYSS (From waterLineY downwards)
      const deepGrad = ctx.createLinearGradient(0, waterLineY, 0, height);
      deepGrad.addColorStop(0, '#00487d');
      deepGrad.addColorStop(0.25, '#003562');
      deepGrad.addColorStop(0.6, '#002446');
      deepGrad.addColorStop(1, '#00142b');
      ctx.fillStyle = deepGrad;
      ctx.fillRect(0, waterLineY, width, height - waterLineY);

      // 3. FLOATING PARTICLES / BUBBLES
      ctx.save();
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + p.pulse) * 0.15;
        p.pulse += p.pulseSpeed;

        // Wrap around bottom if floated above waterline
        if (p.y < waterLineY + 8) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const currentAlpha = Math.max(0, p.baseAlpha + Math.sin(p.pulse) * 0.08);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(195, 240, 255, ${currentAlpha})`;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 5;
        ctx.fill();
      });
      ctx.restore();

      // 4. WATERLINE MENISCUS (Undulating smooth organic waterline - NO black border stroke)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, waterLineY);
      for (let x = 0; x <= width; x += 15) {
        const wave1 = Math.sin(x * 0.006 + time * 1.6) * 4;
        const wave2 = Math.cos(x * 0.012 - time * 1.1) * 2.5;
        const waveY = waterLineY + wave1 + wave2;
        ctx.lineTo(x, waveY);
      }
      // Soft crystalline refraction highlight (NO black border)
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ filter: 'contrast(1.05) saturate(1.1)' }}
      />
    </div>
  );
};
