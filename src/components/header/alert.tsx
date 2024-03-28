import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  navHidden: boolean;
};

export default function Alert({ children, navHidden }: Props) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      animate={navHidden ? "hidden" : "visible"}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="isolate text-center bg-gray-700 bg-opacity-30 md:py-1 py-2 backdrop-filter backdrop-blur-md shadow-lg text-sm z-0"
    >
      {children}
    </motion.div>
  );
}
