import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const reveal = {
  heading: {
    hidden: { opacity: 0, y: 36 },
    visible: (d: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE, delay: d },
    }),
  },
  text: {
    hidden: { opacity: 0, y: 22 },
    visible: (d: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE, delay: d },
    }),
  },
  card: {
    hidden: { opacity: 0, y: 28 },
    visible: (d: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE, delay: d },
    }),
  },
  image: {
    hidden: { opacity: 0, scale: 0.96, y: 24 },
    visible: (d: number = 0) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: EASE, delay: d },
    }),
  },
  fade: {
    hidden: { opacity: 0 },
    visible: (d: number = 0) => ({
      opacity: 1,
      transition: { duration: 0.8, ease: EASE, delay: d },
    }),
  },
};

type Variant = keyof typeof reveal;

type RevealProps = {
  variant?: Variant;
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ variant = "text", delay = 0, className, children }: RevealProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      variants={reveal[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  stagger?: number;
  className?: string;
  children: ReactNode;
};

export function RevealGroup({ stagger = 0.1, className, children }: StaggerProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  variant = "card",
  className,
  children,
}: Omit<RevealProps, "delay">) {
  return (
    <motion.div variants={reveal[variant]} custom={0} className={className}>
      {children}
    </motion.div>
  );
}
