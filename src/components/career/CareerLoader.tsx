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
    }, 4000);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <div>CareerLoader</div>
    </>
  );
}

export default CareerLoader;
