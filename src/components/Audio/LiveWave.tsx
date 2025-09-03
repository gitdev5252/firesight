"use client";
import React, { useEffect, useRef } from "react";
import { useTracks } from "@livekit/components-react";
import { Track } from "livekit-client";

export const LiveWaveform = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const rafRef = useRef<number | null>(null);

  // remote mic tracks only
  const audioTracks = useTracks([Track.Source.Microphone]).filter(
    (t) => !t.participant.isLocal
  );

  useEffect(() => {
    if (!canvasRef.current || audioTracks.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const BAR_COUNT = 40;
    const PADDING = 5; // gap between bars
    const BAR_RADIUS = 0; // rounded top radius

    // one-time audio setup
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext!)();
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 64;
      dataArrayRef.current = new Uint8Array(
        analyserRef.current.frequencyBinCount
      );
    }

    // connect every remote track
    audioTracks.forEach((t) => {
      if (t.publication.track) {
        const src = audioCtxRef.current!.createMediaStreamSource(
          new MediaStream([t.publication.track.mediaStreamTrack])
        );
        src.connect(analyserRef.current!);
      }
    });

    // drawing loop
    const draw = () => {
      if (!analyserRef.current || !dataArrayRef.current) return;
      analyserRef.current.getByteFrequencyData(
        dataArrayRef.current! as Uint8Array<ArrayBuffer>
      );
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width + 10, height);

      const barWidth = (width - (BAR_COUNT - 1) * PADDING) / BAR_COUNT;

      for (let i = 0; i < BAR_COUNT; i++) {
        const raw = dataArrayRef.current[i] || 0;
        // scale to canvas height
        const barHeight = (raw / 150) * height;

        // horizontal position
        const x = i * (barWidth + PADDING);
        const y = height - barHeight;

        // gradient: left → right
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0.55, "#14FF00");
        gradient.addColorStop(0.62, "#00F0FF");
        ctx.fillStyle = gradient;

        // rounded rectangle
        ctx.beginPath();
        ctx.roundRect(x, y / 2, barWidth, barHeight, [
          BAR_RADIUS,
          BAR_RADIUS,
          200,
          0,
        ]);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [audioTracks]);

  // fallback to static SVG if no remote audio
  if (audioTracks.length === 0) {
    return (
      <img
        src="/images/icons/soundwave.svg"
        alt="soundwave"
        style={{ width: "30vw", height: "auto" }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      height={40}
      style={{ height: "60px", display: "block" }}
      className="sm:w-[30vw] w-[80vw]"
    />
  );
};
