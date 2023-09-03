"use client";

import React, { useEffect } from "react";

export default function GlowingEffect() {
  useEffect(() => {
    const updateMousePosition = (ev) => {
      const { clientX, clientY } = ev;
      document.documentElement.style.setProperty("--x", `${clientX}px`);
      document.documentElement.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          /* overflow: hidden; */ /* Prevent scrollbars */
        //   cursor: none; /* Hide cursor */
        }

        .glow-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
        }

        .glow {
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
            circle farthest-side at var(--x, 10px) var(--y, 10px),
            rgba(18, 80, 170, 0.3) 0%,
            // rgba(255, 255, 255, 0.05) 0%,

            transparent 70%
          );
        }
      `}</style>
      <div className="glow-container">
        <div className="glow"></div>
      </div>
    </>
  );
}
