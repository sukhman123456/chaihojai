import { useEffect, useRef } from "react";

export function ChaiSteam() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let animId = 0;
    let isVisible = true;
    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Dynamic cup rim detection based on actual screen layout
    const getCupRim = () => {
      let cupX = width * 0.732;
      let cupY = height * 0.502;
      let rx = Math.min(width * 0.055, 68);

      if (width < 640) {
        cupX = width * 0.70;
        cupY = height * 0.515;
        rx = width * 0.075;
      } else if (width < 1024) {
        cupX = width * 0.72;
        cupY = height * 0.505;
        rx = width * 0.065;
      }

      return { cupX, cupY, rx };
    };

    // Exactly 3 distinct, delicate, organic wisps
    const wisps = [
      {
        offsetX: -12, // left wisp
        offsetY: 2,
        heightRatio: 0.32, // fraction of hero height
        swaySpeed1: 0.0016,
        swaySpeed2: 0.0022,
        swayAmp: 16,
        curlDir: -0.6,
        phase1: 0.4,
        phase2: 1.8,
        width: 3.5,
        alpha: 0.42,
      },
      {
        offsetX: 6, // center / main tallest wisp
        offsetY: -1,
        heightRatio: 0.38,
        swaySpeed1: 0.0012,
        swaySpeed2: 0.0019,
        swayAmp: 22,
        curlDir: 0.8,
        phase1: 2.5,
        phase2: 4.1,
        width: 4.2,
        alpha: 0.48,
      },
      {
        offsetX: 24, // right delicate wisp
        offsetY: 4,
        heightRatio: 0.28,
        swaySpeed1: 0.0018,
        swaySpeed2: 0.0025,
        swayAmp: 14,
        curlDir: 1.1,
        phase1: 5.0,
        phase2: 0.9,
        width: 3.0,
        alpha: 0.38,
      },
    ];

    let startTime = performance.now();

    const render = (now: number) => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      const { cupX, cupY, rx } = getCupRim();

      // Soft ambient heat haze directly on the surface of hot chai
      const hazeRadius = rx * 0.95;
      const hazeGrad = ctx.createRadialGradient(
        cupX,
        cupY - 4,
        0,
        cupX,
        cupY - 4,
        hazeRadius
      );
      hazeGrad.addColorStop(0, "rgba(255, 248, 232, 0.12)");
      hazeGrad.addColorStop(0.5, "rgba(255, 242, 224, 0.05)");
      hazeGrad.addColorStop(1, "rgba(255, 240, 220, 0)");

      ctx.save();
      ctx.fillStyle = hazeGrad;
      ctx.beginPath();
      ctx.ellipse(cupX, cupY - 4, hazeRadius, hazeRadius * 0.28, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Render the 3 distinct, organic flowing steam wisps
      wisps.forEach((wisp) => {
        const startX = cupX + wisp.offsetX;
        const startY = cupY + wisp.offsetY;
        const totalHeight = height * wisp.heightRatio;
        const endY = startY - totalHeight;

        // Sample 24 points along the wisp curve for ultra-smooth fluid organic motion
        const numPoints = 24;
        const points: { x: number; y: number }[] = [];

        for (let j = 0; j <= numPoints; j++) {
          const p = j / numPoints; // 0 at tea surface, 1 at top dissipation
          const y = startY - p * totalHeight;

          // Organic thermal curling harmonics
          // p=0 has 0 sway so it stays anchored to the tea surface
          const swell = Math.pow(p, 1.25);
          const wave1 =
            Math.sin(elapsed * wisp.swaySpeed1 + p * 3.8 + wisp.phase1) *
            wisp.swayAmp *
            swell;
          const wave2 =
            Math.cos(elapsed * wisp.swaySpeed2 + p * 5.4 + wisp.phase2) *
            (wisp.swayAmp * 0.45) *
            p;
          const naturalCurl = Math.pow(p, 1.8) * wisp.curlDir * 20;

          const x = startX + wave1 + wave2 + naturalCurl;
          points.push({ x, y });
        }

        // Create vertical gradient: starts soft at tea surface, peaks, then diffuses into warm background
        const grad = ctx.createLinearGradient(0, startY, 0, endY);
        grad.addColorStop(0, "rgba(255, 252, 244, 0)");
        grad.addColorStop(0.08, `rgba(255, 250, 242, ${wisp.alpha * 0.4})`);
        grad.addColorStop(0.24, `rgba(255, 248, 238, ${wisp.alpha})`);
        grad.addColorStop(0.55, `rgba(252, 245, 234, ${wisp.alpha * 0.65})`);
        grad.addColorStop(0.82, `rgba(248, 240, 226, ${wisp.alpha * 0.22})`);
        grad.addColorStop(1, "rgba(245, 238, 222, 0)");

        const drawSmoothSpline = () => {
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i];
            const p1 = points[i + 1];
            const midX = (p0.x + p1.x) / 2;
            const midY = (p0.y + p1.y) / 2;
            ctx.quadraticCurveTo(p0.x, p0.y, midX, midY);
          }
          ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        };

        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = grad;

        // Pass 1: Delicate outer warm atmospheric aura (no harsh neon, pure soft glow)
        ctx.lineWidth = wisp.width * 3.8;
        ctx.globalAlpha = 0.15;
        drawSmoothSpline();
        ctx.stroke();

        // Pass 2: Soft flowing wisp body
        ctx.lineWidth = wisp.width * 1.8;
        ctx.globalAlpha = 0.42;
        drawSmoothSpline();
        ctx.stroke();

        // Pass 3: Subtle central thread (adds realistic definition without looking cartoonish)
        ctx.lineWidth = wisp.width * 0.75;
        ctx.globalAlpha = 0.75;
        drawSmoothSpline();
        ctx.stroke();

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 h-full w-full mix-blend-screen"
    />
  );
}
