"use client";

export default function Loader({ size = "lg", color = "primary" }) {
  return (
    <div className="flex justify-center items-center h-full">
      <span
        className={`loading loading-spinner loading-${size} text-${color}`}
      ></span>
    </div>
  );
}
