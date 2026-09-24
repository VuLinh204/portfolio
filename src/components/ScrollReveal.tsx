"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

/* ── Scroll-triggered fade+slide reveal ── */

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
  amount?: number;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -36 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 36 },
    show: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      variants={variants[direction]}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container for child items ── */

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
  amount = 0.15,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Individual stagger item ── */
export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  return (
    <motion.div
      variants={variants[direction]}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Section clip reveal (dramatic scale+clip entry) ── */
export function ClipReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
      animate={inView ? { clipPath: "inset(0% 0 0 0)", opacity: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Word-by-word text reveal ── */
export function WordReveal({
  text,
  className,
  delay = 0,
  wordClassName,
}: {
  text: string;
  className?: string;
  delay?: number;
  wordClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
            className={`inline-block ${wordClassName ?? ""}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
