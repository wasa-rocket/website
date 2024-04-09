import { easeInOut, motion } from "framer-motion";

export function ShowFromDown({
  children,
  isInView,
  className="",
}: {
  children: React.ReactNode;
  isInView: boolean;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1 },
      }}
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HoverPop({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: easeInOut },
      }}
    >
      {children}
    </motion.div>
  );
}
