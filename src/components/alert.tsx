import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="isolate text-center bg-gray-700 bg-opacity-30 md:py-1 py-2 backdrop-filter backdrop-blur-md shadow-lg text-sm z-0"
    >
      {children}
    </div>
  );
}
