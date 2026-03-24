import PixelConfetti from "./PixelConfetti";
import PixelSquaresStatic from "./PixelSquaresStatic";
import PixelSquaresDynamic from "./PixelSquaresDynamic";

// Uncomment these once you actually have the files:
// import sword from "../assets/sword.png";
// import drink from "../assets/drink.png";
// import snowflake from "../assets/snowflake.png";
// import heart from "../assets/heart.png";

export default function RetroHero() {
  return (
    <main id="home" className="relative min-h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-700 via-purple-700 to-slate-900" />

      {/* Pink pixel squares (static + optional motion) */}
      <PixelSquaresStatic />
      <PixelSquaresDynamic count={20} />

      {/* Your existing confetti overlay */}
      <PixelConfetti />

      {/* Center content */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-16 text-center">
        <h1 className="font-pixel text-4xl leading-tight sm:text-5xl md:text-6xl">
          RETRO
          <br />
          <span className="mt-2 inline-block">GAME NIGHT</span>
        </h1>

        <div className="mt-7 font-pixel text-sm tracking-wide opacity-95">
          FANTASY &amp; MEDIEVAL
        </div>

        <p className="mt-4 max-w-xl text-sm leading-6 text-white/80">
          The passage experienced a surge in popularity during the 1960s when used it on their
          sheets ex-perienced a surge in popula.
        </p>

        <a
          href="#rsvp"
          className="mt-8 inline-flex items-center justify-center bg-white px-10 py-3 font-pixel text-xs text-black hover:bg-white/90"
          style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.25)", borderRadius: 0 }}
        >
          RSVP
        </a>

        <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-44 bg-gradient-to-t from-black/45 to-transparent" />
      </section>
    </main>
  );
}
