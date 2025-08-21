"use client";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/hero.gif')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="relative z-10 max-w-3xl md:max-w-5xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          DEMAND FOR HAND CRAFTED WORK
        </h1>
      </div>
    </section>
  );
}
