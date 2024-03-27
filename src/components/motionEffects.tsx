import { easeInOut, motion } from "framer-motion";

export function ShowFromDown({
  children,
  isInView,
}: {
  children: React.ReactNode;
  isInView: boolean;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1 },
      }}
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
