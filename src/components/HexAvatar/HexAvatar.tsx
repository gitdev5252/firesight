
import React from "react";

export interface HexAvatarProps {
  initials: string;
  size?: number | string; // px, rem, etc.
  fontSize?: number | string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const HexAvatar: React.FC<HexAvatarProps> = ({
  initials,
  size = 32,
  fontSize = 14,
  bgColor = "transparent",
  textColor = "#fff",
  borderColor = "#fff",
  className = "",
  style = {},
}) => {
  const resolvedSize = typeof size === "number" ? `${size}px` : size;
  const resolvedFontSize = typeof fontSize === "number" ? `${fontSize}px` : fontSize;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: resolvedSize, height: resolvedSize, background: bgColor, ...style }}
    >
      <svg
        width={resolvedSize}
        height={resolvedSize}
        viewBox="0 0 32 32"
        fill="none"
        style={{ display: "block" }}
      >
        <path
          d="M30.5566 13.5C31.4498 15.047 31.4498 16.953 30.5566 18.5L25.4434 27.3564C24.5502 28.9034 22.8996 29.8564 21.1132 29.8564L10.8868 29.8564C9.10042 29.8564 7.44979 28.9034 6.55663 27.3564L1.44338 18.5C0.550214 16.953 0.550214 15.047 1.44338 13.5L6.55663 4.64359C7.44979 3.09659 9.10043 2.14359 10.8868 2.14359L21.1133 2.14359C22.8996 2.14359 24.5502 3.09659 25.4434 4.64359L30.5566 13.5Z"
          fill="url(#hexGradient)"
          fillOpacity="0.4"
        />
        <path
          opacity="0.2"
          d="M30.124 13.75C30.9277 15.1422 30.9277 16.8578 30.124 18.25L25.0107 27.1064C24.2069 28.4987 22.721 29.3564 21.1133 29.3564L10.8867 29.3564C9.27904 29.3564 7.7931 28.4987 6.98926 27.1064L1.87598 18.25C1.07226 16.8578 1.07227 15.1422 1.87598 13.75L6.98926 4.89355C7.7931 3.50126 9.27904 2.64357 10.8867 2.64355L21.1133 2.64355C22.721 2.64357 24.2069 3.50126 25.0107 4.89355L30.124 13.75Z"
          stroke={borderColor ? borderColor : ""}
        />
        <defs>
          <linearGradient id="hexGradient" x1="4.57143" y1="1.67164" x2="5.38194" y2="32.46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#039898" stopOpacity="0.63"/>
            <stop offset="0.703125" stopColor="#6DEEFF" stopOpacity="0.97"/>
          </linearGradient>
        </defs>
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center font-bold tracking-wide"
        style={{
          color: textColor,
          fontSize: resolvedFontSize,
          fontFamily: 'Lekton, monospace',
          userSelect: 'none',
        }}
      >
        {initials}
      </div>
    </div>
  );
};
