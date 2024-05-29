import React, { useState, useEffect, useRef } from 'react';

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <svg width="100vw" height="100vh" ref={svgRef}>
      <defs>
        <mask id="mask">
          <circle
            cx="50%"
            cy="40%"
            r="100%"
            fill="url(#gradient)"
          >
            <animate
              id="lightson"
              attributeName="r"
              dur="1s"
              fill="freeze"
              begin="circle-three.end + 0.1s"
              values="100%; 0; 0; 82px"
              keyTimes="0; 0.01; 0.8; 1"
            />
          </circle>
          <radialGradient id="gradient">
            <stop offset="75%" stop-color="#fff" />
            <stop offset="100%" stop-color="#000" />
          </radialGradient>
        </mask>

        <radialGradient id="gradient">
          <stop offset="75%" stop-color="#fff" />
          <stop offset="100%" stop-color="#000" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="#000" />

      <g mask="url(#mask)">
        <rect x="0" y="0" width="100%" height="100%" fill="#F15A2B" />
        <g fill="#FFF" text-anchor="middle" font-family="Josefin Sans">
          <text x="50%" y="40%" fontSize="5rem">404</text>
          <text x="50%" y="40%" dy="50px" fontSize="2.5rem">
            Page Not Found
          </text>
        </g>

        <g fill="#FFF">
          <g
            fontSize="1.2rem"
            fontFamily="Open Sans"
            text-anchor="middle"
          >
            <text x="50%" y="60%">
              Let me try to fix it...
              <animate
                attributeName="opacity"
                to="0"
                fill="freeze"
                dur="0.1s"
                begin="lightson.end"
              />
            </text>

            <text x="50%" y="65%">Hope nothing more breaks</text>
            <animate
              attributeName="opacity"
              to="0"
              fill="freeze"
              dur="0.1s"
              begin="lightson.end"
            />
          </g>

          <circle cx="45%" cy="70%" r="0">
            <animate
              id="circle-one"
              attributeName="r"
              values="0; 1%; 0"
              keyTimes="0; 0.75; 1"
              dur="0.5s"
              begin="1.5s"
            />
          </circle>

          <circle cx="50%" cy="70%" r="0">
            <animate
              id="circle-two"
              attributeName="r"
              dur="0.5s"
              begin="circle-one.end + 0.5s"
              values="0; 1%; 0"
              keyTimes="0; 0.75; 1"
            />
          </circle>

          <circle cx="55%" cy="70%" r="0">
            <animate
              id="circle-three"
              attributeName="r"
              dur="0.5s"
              begin="circle-two.end + 0.5s"
              values="0; 1%; 0"
              keyTimes="0; 0.75; 1"
            />
          </circle>
        </g>

        <g
          text-anchor="middle"
          fill="#fff"
          fontFamily="Open Sans"
          opacity="0"
        >
          <text x="50%" y="60%">
            Oh-oh...
          </text>

          <a href="#">
            <text
              x="50%"
              y="65%"
              style={{
                textTransform: 'uppercase',
                textDecoration: 'underline',
                fill: 'inherit',
              }}
            >
              Try the homepage 😅
            </text>
          </a>
          <animate
            attributeName="opacity"
            to="1"
            dur="0.2s"
            begin="lightson.end"
            fill="freeze"
          />
        </g>
      </g>
    </svg>
  );
};

export default NotFoundPage;