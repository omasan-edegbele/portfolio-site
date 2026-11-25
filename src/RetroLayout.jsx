import PixelConfetti from "./PixelConfetti";
import PixelSquaresStatic from "./PixelSquaresStatic";
import PixelSquaresDynamic from "./PixelSquaresDynamic";
import SideDecorations from "./SideDecorations";

export default function RetroLayout({ children }) {
  return (
    <div className="relative isolate min-h-screen w-full bg-gradient-to-b from-fuchsia-700 via-purple-700 to-slate-900">
      <PixelSquaresDynamic count={16} />
            {/*Add 2d sprites here if time allows*/}
      <main className="min-h-screen">{children}</main>
      <SideDecorations />
    </div>
  );
}