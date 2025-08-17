"use client";
import NextLink from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Link } from "lucide-react";

import { subData, slideData } from "@/utils/constant/firesight";

export default function StartSessionPage() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenFuture, setModalOpenFuture] = useState(false);

  const swipeConfidenceThreshold = 100;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const totalSlides = slideData.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevPage]) => {
        const newPage = (prevPage + newDirection + totalSlides) % totalSlides;
        return [newPage, newDirection];
      });
    },
    [totalSlides]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <div className="w-full flex relative md:px-14 px-4 flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Modal Overlay */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.35)] backdrop-blur-[8px]"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.12)] rounded-[10px] shadow-xl w-full max-w-md relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-row justify-between items-center pl-8 pr-6 pt-6 ">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/icons/camera-green.png"
                    alt="Start"
                    className=""
                  />
                  <h3 className="text-2xl font-bold text-white">New Session</h3>
                </div>
                <button
                  className=" text-gray-400 text-5xl flex items-center justify-center transition"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="border-t border-[rgba(255,255,255,0.12)] my-4" />
              {/* divider */}
              <div className="pl-8 pr-6 pt-2 pb-4 gap-3 flex flex-col">
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => setModalOpenFuture(true)}
                >
                  <Image
                    src="/images/icons/clock-green.svg"
                    alt="Start"
                    className=""
                  />
                  <h3 className="text-[18px] font-normal text-gray-200">
                    Schedule a Session
                  </h3>
                </div>
                <NextLink href="/conference">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/icons/send-green.svg"
                      alt="Start"
                      className=""
                    />
                    <h3 className="text-[18px] font-normal text-gray-200">
                      Start a Session
                    </h3>
                  </div>
                </NextLink>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/icons/calendar-green.svg"
                    alt="Start"
                    className=""
                  />
                  <h3 className="text-[18px] font-normal text-gray-200">
                    Schedule a Session in Google Calendar
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {modalOpenFuture && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.35)] backdrop-blur-[8px]"
            onClick={() => setModalOpenFuture(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.12)] rounded-[10px] shadow-xl w-full max-w-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-row justify-between items-center pl-8 pr-8 pt-6 ">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/icons/clock-green.svg"
                    alt="Start"
                    className=""
                  />
                  <h3 className="text-2xl font-bold text-white">
                    Create a Session For Future
                  </h3>
                </div>
                <button
                  className=" text-gray-400 text-5xl flex items-center justify-center transition"
                  onClick={() => setModalOpenFuture(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="border-t border-[rgba(255,255,255,0.12)] my-4" />
              {/* divider */}
              <div className="pl-8 pr-6 pt-2 pb-4 gap-3 flex flex-col">
                <div
                  className="flex items-center gap-4"
                  onClick={() => setModalOpenFuture(true)}
                >
                  <h3 className="text-[16px] font-normal text-gray-200">
                    Send this link to people you want to invite to the Session.
                    Don’t forget to save the link, so you can use it later
                  </h3>
                </div>
                <div className="flex items-center gap-3 p-2 bg-[#0f1419] rounded-lg border border-white/10">
                  <Link color="white" />
                  <span className="text-white/80 text-sm flex-1 font-mono">
                    {`${window.location.origin}/conference?room=${"abc"}`}
                  </span>
                  <button
                    className="p-1 hover:bg-white/10 rounded"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `${window.location.origin}/conference?room=${"abc"}`
                      );
                    }}
                  >
                    <Copy color="white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 pointer-events-none z-[-100]">
        <div className="green-shine-session-mobile md:hidden block"></div>
        <div className="green-shine-session md:block hidden"></div>
        <div className="green-shine-session-small md:block hidden"></div>
        <div className="green-shine-session-2nd-small md:block hidden"></div>
        <div className="green-shine-session-3rd-small md:block hidden"></div>
      </div>
      <div className="flex flex-wrap p-[50px] -top-[20px] text-white items-center justify-between border bg-[rgba(255,255,255,0.01)] border-[rgba(255,255,255,0.1)] backdrop-blur-[32px] rounded-[20px] w-full relative">
        <div className="md:w-5/9 w-full pt-[30px] pr-[100px]">
          <h2 className="uppercase text-[35px] font-bold">
            smarter calls,{" "}
            <span className="bg-gradient-to-b from-[rgba(20,255,0,0.55)] to-[rgba(0,240,255,0.62)] bg-clip-text text-transparent">
              faster decisions
            </span>
          </h2>
          <p className="text-[16px] pt-[40px]">
            Sessions is an AI-Native browser-based video conferencing platform
            and your real-time decision co-pilot. Move from discussion to
            decision faster with Firesight | Sessions.
          </p>
          <div className="flex flex-wrap mt-[50px] gap-4">
            <button
              className="flex items-center text-[18px] px-[36px] py-[14px] text-white font-bold cursor-pointer"
              style={{
                border: "1px solid rgba(15, 251, 73, 0.59)",
                borderRadius: "55px",
                background:
                  "linear-gradient(88deg, rgba(3, 139, 152, 0.06) 5.46%, rgba(15, 251, 73, 0.06) 71.42%)",
                boxShadow: "0 3.131px 46.972px 0 rgba(13, 63, 46, 0.5)",
              }}
              onClick={() => setModalOpen(true)}
            >
              <Image
                src="/images/icons/camera.svg"
                alt="New Session"
                className="pr-2"
              />
              New Session
            </button>
            <button
              className="flex items-center text-[18px] px-[36px] py-[14px] text-white font-bold"
              style={{
                border: "1px solid #262933",
                borderRadius: "55px",
                background: "rgba(8, 11, 22, 0.50)",
                boxShadow: "0 3.131px 46.972px 0 rgba(13, 63, 46, 0.5)",
              }}
            >
              <Image
                src="/images/icons/link.svg"
                alt="New Session"
                className="pr-2"
              />
              Enter Session Link
            </button>
          </div>
          <div className="border border-b-[1px] border-[rgba(255,255,255,0.1)] mt-[45px] w-full"></div>
          <div className="flex flex-wrap mt-[50px] gap-4">
            {subData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-2 ">
                <Image src={item.image} alt={item.title} className="w-6 h-6" />
                <span className="text-[14px]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[rgba(255,255,255,0.1)] px-[30px] pt-[30px] pb-[10px] md:w-4/9 w-full rounded-[20px] relative flex flex-col items-center min-h-[450px] h-[450px] justify-between">
          <div className="flex-1 w-full flex items-center justify-center">
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
                  enter: (dir: number) => ({
                    x: dir > 0 ? 300 : -300,
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                  },
                  exit: (dir: number) => ({
                    x: dir < 0 ? 300 : -300,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full flex items-center justify-center"
              >
                {(() => {
                  const currentIndex = page % slideData.length;
                  const item = slideData[currentIndex];
                  return (
                    <Image
                      src={item.image}
                      alt={item.title}
                      key={item.title}
                      className="mx-auto"
                    />
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Custom Polygon Pagination */}
          <div className="flex items-center justify-center gap-3 mt-6 mb-2 z-10">
            {slideData.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setPage([idx, idx > page ? 1 : -1])}
                className={`h-6 flex items-center justify-center bg-transparent border-none p-0 focus:outline-none transition-all duration-200 ${
                  page === idx ? "w-[18px]" : "w-[10px]"
                }`}
                style={{ background: "none" }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <Image
                  src={
                    page === idx
                      ? "/images/icons/polygon-active.svg"
                      : "/images/icons/polygon.svg"
                  }
                  alt={page === idx ? "Active" : "Inactive"}
                  width={page === idx ? 18 : 10}
                  height={10}
                  style={{
                    display: "block",
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    transition: "width 0.2s",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'url("/images/mobile/sessions-show-mobile.svg")',
          backgroundSize: "contain",
        }}
        className="w-[100vw] h-[206.07vw] bg-no-repeat block md:hidden"
      ></div>
    </div>
  );
}
