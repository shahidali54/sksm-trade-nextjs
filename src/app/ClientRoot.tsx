"use client";
import React, { useState, useEffect } from "react";
import Preloader from "./components/layout/Preloader";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true);
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
      setTimeout(() => setAnimateContent(true), 50); // slight delay for smoothness
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader && <Preloader />}
      <div
        style={{
          filter: showPreloader ? "blur(2px)" : "none",
          transition: "filter 0.7s"
        }}
        className={animateContent ? "fade-in-up" : ""}
      >
        {children}
      </div>
    </>
  );
} 