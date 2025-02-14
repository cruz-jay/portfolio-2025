const Saturn = () => {
  return (
    <div className="fixed bottom-10 right-10 w-32 h-32 z-10">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Saturn's rings with only rotation animation */}
        <g className="animate-[spin_20s_linear_infinite]">
          <ellipse
            cx="100"
            cy="100"
            rx="80"
            ry="20"
            fill="none"
            stroke="#DAA520"
            strokeWidth="2"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="70"
            ry="17"
            fill="none"
            stroke="#B8860B"
            strokeWidth="2"
          />
        </g>

        {/* Saturn planet (static, only pulsing) */}
        <circle
          cx="100"
          cy="100"
          r="40"
          fill="#B8860B"
          className="animate-pulse"
        />

        {/* Surface details (static) */}
        <path
          d="M70 85 Q100 95 130 85"
          stroke="#DAA520"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M70 115 Q100 105 130 115"
          stroke="#DAA520"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default Saturn;
