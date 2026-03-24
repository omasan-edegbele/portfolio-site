export default function PixelSquaresStatic() {
  return (
    <>
      {/* Big squares */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,170,255,0.55) 12px, transparent 12px),
            linear-gradient(90deg, rgba(255,170,255,0.55) 12px, transparent 12px)
          `,
          backgroundSize: "64px 64px",
          backgroundPosition: "12px 18px",
        }}
      />
      {/* Small squares */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,220,255,0.35) 8px, transparent 8px),
            linear-gradient(90deg, rgba(255,220,255,0.35) 8px, transparent 8px)
          `,
          backgroundSize: "44px 44px",
          backgroundPosition: "0px 0px",
        }}
      />
    </>
  );
}
