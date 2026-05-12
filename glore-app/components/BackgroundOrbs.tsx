export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Purple orb — top-left */}
      <div
        className="orb-1 absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full opacity-[0.28]"
        style={{
          background:
            "radial-gradient(circle at center, #7B3FBE 0%, rgba(123,63,190,0.45) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Pink orb — bottom-right */}
      <div
        className="orb-2 absolute -bottom-48 -right-40 h-[550px] w-[550px] rounded-full opacity-[0.22]"
        style={{
          background:
            "radial-gradient(circle at center, #E879B0 0%, rgba(232,121,176,0.45) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Mid accent — upper-center, very subtle */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[250px] w-[700px] rounded-full opacity-[0.09]"
        style={{
          background:
            "radial-gradient(ellipse at center, #A855C8 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
    </div>
  );
}
