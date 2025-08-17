"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { slideData } from "@/utils/constant/firesight";

interface Props {
  page: number;
  direction: number;
  setPage: (fn: (prev: number) => number) => void;
  setDirection: (dir: number) => void;
}

const swipeConfidenceThreshold = 100;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export default function SessionCarousel({
  page,
  direction,
  setPage,
  setDirection,
}: Props) {
  const paginate = (newDirection: number) => {
    setPage(
      (prev) => (prev + newDirection + slideData.length) % slideData.length
    );
    setDirection(newDirection);
  };

  const currentSlide = slideData[page % slideData.length];

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={page}
        custom={direction}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) paginate(1);
          else if (swipe > swipeConfidenceThreshold) paginate(-1);
        }}
        variants={{
          enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
          center: { x: 0, opacity: 1 },
          exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
        }}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full flex items-center justify-center"
      >
        <Image
          src={currentSlide.image}
          alt={currentSlide.title}
          width={537}
          height={347}
        />
      </motion.div>
    </AnimatePresence>
  );
}
