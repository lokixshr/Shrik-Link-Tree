import { useEffect, useState } from "react";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const RippleEffect = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 800);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute w-5 h-5 -ml-2.5 -mt-2.5 rounded-full border-2 border-foreground animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
