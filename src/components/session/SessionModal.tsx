"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";

interface Props {
  onClose: () => void;
  onSchedule: () => void;
}

export default function SessionModal({ onClose, onSchedule }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.35)] backdrop-blur-[8px]"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.12)] rounded-[10px] shadow-xl w-full max-w-md relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pl-8 pr-6 pt-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/icons/camera-green.png"
              alt="Start"
              width={24}
              height={24}
            />
            <h3 className="text-2xl font-bold text-white">New Session</h3>
          </div>
          <button
            className="text-gray-400 text-5xl"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.12)] my-4" />

        <div className="pl-8 pr-6 pt-2 pb-4 gap-3 flex flex-col">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={onSchedule}
          >
            <Image
              src="/images/icons/clock-green.svg"
              alt="Schedule"
              width={18}
              height={18}
            />
            <h3 className="text-[18px] text-gray-200">Schedule a Session</h3>
          </div>
          <NextLink href="/conference">
            <div className="flex items-center gap-4 cursor-pointer">
              <Image
                src="/images/icons/send-green.svg"
                alt="Start"
                width={18}
                height={18}
              />
              <h3 className="text-[18px] text-gray-200">Start a Session</h3>
            </div>
          </NextLink>
          <div className="flex items-center gap-4">
            <Image
              src="/images/icons/calendar-green.svg"
              alt="Calendar"
              width={18}
              height={18}
            />
            <h3 className="text-[18px] text-gray-200">
              Schedule in Google Calendar
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
