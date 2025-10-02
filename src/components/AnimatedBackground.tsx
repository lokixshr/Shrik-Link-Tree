const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03] -z-10">
      {/* Geometric shapes inspired by the Shrik logo */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 animate-float">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100 20 C130 20, 150 40, 150 70 C150 100, 130 120, 100 120 C70 120, 50 100, 50 70 C50 40, 70 20, 100 20 M100 80 C130 80, 150 100, 150 130 C150 160, 130 180, 100 180 C70 180, 50 160, 50 130 C50 100, 70 80, 100 80"
            fill="currentColor"
            className="text-foreground"
          />
        </svg>
      </div>

      <div className="absolute top-2/3 right-1/4 w-48 h-48 animate-float-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100 30 C125 30, 145 50, 145 75 C145 100, 125 120, 100 120 C75 120, 55 100, 55 75 C55 50, 75 30, 100 30 M100 80 C125 80, 145 100, 145 125 C145 150, 125 170, 100 170 C75 170, 55 150, 55 125 C55 100, 75 80, 100 80"
            fill="currentColor"
            className="text-foreground"
          />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-2/3 w-56 h-56 animate-float">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100 25 C128 25, 148 45, 148 73 C148 101, 128 121, 100 121 C72 121, 52 101, 52 73 C52 45, 72 25, 100 25 M100 79 C128 79, 148 99, 148 127 C148 155, 128 175, 100 175 C72 175, 52 155, 52 127 C52 99, 72 79, 100 79"
            fill="currentColor"
            className="text-foreground"
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;
