import RetroNav from "./RetroNav";
import PixelConfetti from "./PixelConfetti";
import PixelSquaresStatic from "./PixelSquaresStatic";
import PixelSquaresDynamic from "./PixelSquaresDynamic";

export default function RetroLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-fuchsia-700 via-purple-700 to-slate-900">
      <RetroNav />
      <PixelSquaresDynamic count={16} />
            {/*Add 2d sprites here if time allows*/}
      <main className="min-h-[calc(100vh-56px)]">{children}</main>
    </div>
  );
}