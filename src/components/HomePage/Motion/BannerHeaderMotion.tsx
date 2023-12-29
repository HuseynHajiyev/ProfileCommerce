import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface BannerHeaderMotionProps {
  children: React.ReactNode;
  isActive: boolean;
}

const BannerHeaderMotion = ({children, isActive }: BannerHeaderMotionProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: 350 });
    }
  }, [isActive, controls]);

  return (
    <motion.div
      initial={{ x: -350 }}
      variants={{

      }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default BannerHeaderMotion