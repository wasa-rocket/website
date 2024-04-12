"use client";

import React, { useEffect } from "react";

function CareerLoader({
  setLoadingAnimation,
}: {
  setLoadingAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingAnimation(false);
    }, 5000);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <div className="text-black text-4xl">CareerLoader</div>
    </>
  );
}

export default CareerLoader;
