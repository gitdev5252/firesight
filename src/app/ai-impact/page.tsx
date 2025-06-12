"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Pulse() {
  const router = useRouter();

  useEffect(() => {
    router.push("/ai-impact/home"); // or a full URL
  }, [router]);
  
  return (
    <div>
      <p>Redirecting to Overview ...</p>
    </div>
  );
}
