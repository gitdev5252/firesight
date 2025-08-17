"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Copy, Link } from "lucide-react";

interface Props {
  onClose: () => void;
  origin: string;
}

export default function ScheduledSessionModal({ onClose, origin }: Props) {
  const sessionLink = `${origin}/conference?room=abc`;

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
        className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.12)] rounded-[10px] shadow-xl w-full max-w-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pl-8 pr-8 pt-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/icons/clock-green.svg"
              alt="Future"
              width={24}
              height={24}
            />
            <h3 className="text-2xl font-bold text-white">
              Create a Session For Future
            </h3>
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
          <p className="text-[16px] text-gray-200">
            Send this link to people you want to invite. Don’t forget to save
            it!
          </p>
          <div className="flex items-center gap-3 p-2 bg-[#0f1419] rounded-lg border border-white/10">
            <Link color="white" />
            <span className="text-white/80 text-sm flex-1 font-mono">
              {sessionLink}
            </span>
            <button
              className="p-1 hover:bg-white/10 rounded"
              onClick={() => navigator.clipboard.writeText(sessionLink)}
            >
              <Copy color="white" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
