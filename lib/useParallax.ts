"use client";

import { useRef } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

interface ParallaxOptions {
  offset?: [string, string];
  smooth?: boolean;
  stiffness?: number;
  damping?: number;
}

export function useSectionParallax(options: ParallaxOptions = {}) {
  const {
    offset = ["start end", "end start"],
    smooth = true,
    stiffness = 100,
    damping = 30,
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as [string, string],
  });

  const raw = scrollYProgress;
  const smoothProgress = useSpring(raw, {
    stiffness,
    damping,
    restDelta: 0.001,
  });

  const progress = smooth ? smoothProgress : raw;

  return { ref, progress, scrollYProgress: raw };
}

export function useParallaxValue(
  progress: MotionValue<number>,
  distance: number
) {
  return useTransform(progress, [0, 1], [-distance, distance]);
}

export function useParallaxRange(
  progress: MotionValue<number>,
  inputRange: number[],
  outputRange: number[]
) {
  return useTransform(progress, inputRange, outputRange);
}

export function useParallaxOpacity(
  progress: MotionValue<number>,
  fadeIn = 0.2,
  fadeOut = 0.8
) {
  return useTransform(progress, [0, fadeIn, fadeOut, 1], [0, 1, 1, 0]);
}
