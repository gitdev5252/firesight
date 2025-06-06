"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Pulse() {
  const router = useRouter();

  useEffect(() => {
    router.push("/pulse/overview"); // or a full URL
  }, [router]);
  
  return (
    <div>
      <p>Redirecting to Overview ...</p>
    </div>
  );
}
