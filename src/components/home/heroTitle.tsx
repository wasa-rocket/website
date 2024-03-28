"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HoverPop, ShowFromDown } from "../motionEffects";

export function HeroTitleImage({ src, link }: { src: string; link: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Link href={link}>
      <ShowFromDown isInView={isInView}>
        <HoverPop>
          <Image
            src={src}
            ref={ref}
            alt="Picture of the author"
            width="700"
            height="300"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            className="mb-6"
          />
        </HoverPop>
      </ShowFromDown>
    </Link>
    // <motion.div
    //   variants={{
    //     hidden: { opacity: 0, y: 30 },
    //     visible: { opacity: 1 },
    //   }}
    //   animate={isInView ? "visible" : "hidden"}
    //   transition={{ duration: 0.5, ease: "easeInOut" }}
    // >
    // </motion.div>
  );
}
