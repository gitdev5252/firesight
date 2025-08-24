"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "../ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
interface Props {
  onClose: () => void;
}

export default function EnterLinkModal({ onClose }: Props) {
  const [link, setLink] = useState("");
  const router = useRouter();

  // Extract session id from link (assume last part after last slash)
  const getSessionId = (url: string) => {
    try {
      const parts = url.trim().split("/");
      return parts[parts.length - 1] || "";
    } catch {
      return "";
    }
  };

  const handleJoin = () => {
    router.push(link);
  };

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
              src="/images/icons/link.svg"
              alt="link"
              width={24}
              height={24}
            />
            <h3 className="text-2xl font-bold text-white">
              Please enter session link
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
          <div className="flex flex-col items-center gap-4 cursor-pointer">
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") router.push(link);
              }}
              placeholder="Paste session link here"
              className={cn(
                "border-[rgba(255,255,255,0.12)] bg-transparent text-white focus-visible:ring-offset-0"
              )}
            />
            <div
              className="flex items-center px-[36px] py-[10px] cursor-pointer"
              style={{
                border: "1px solid rgba(15, 251, 73, 0.59)",
                borderRadius: "55px",
                background:
                  "linear-gradient(88deg, rgba(3, 139, 152, 0.06) 5.46%, rgba(15, 251, 73, 0.06) 71.42%)",
                boxShadow: "0 3.131px 46.972px 0 rgba(13, 63, 46, 0.5)",
              }}
              onClick={() => router.push(link)}
            >
              <Image
                src="/images/icons/send-green.svg"
                alt="Start"
                width={18}
                height={18}
              />
              <h3 className="text-[18px] text-gray-200 ml-2">Join</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
