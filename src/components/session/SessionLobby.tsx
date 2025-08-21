"use client";
import { useRouter } from "next/navigation";
import { generateSessionId } from "@/lib/generateSessionId";
import SessionTypeButton from "./SessionTypeButton";

const SessionLobby = () => {
  const router = useRouter();

  const startSession = (type: "agent" | "conference") => {
    console.log("Starting session:", type);
    const id = generateSessionId();
    router.push(`/sessions/${id}?type=${type}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Firesight Sessions
      </h1>
      <div className="space-y-4">
        <SessionTypeButton
          label="Start Agent Session"
          onClick={() => startSession("agent")}
        />
        <SessionTypeButton
          label="Start Conference Session"
          onClick={() => startSession("conference")}
        />
      </div>
    </div>
  );
};

export default SessionLobby;
