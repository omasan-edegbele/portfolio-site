import { Routes, Route, Navigate } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import Home from "./pages/Home";
import MLProjects from "./pages/MLProjects";
import SEProjects from "./pages/SEProjects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import RetroLayout from "./RetroLayout";
import CursorTrail from "./CursorTrail";
import ArcadeUIResume from "./pages/ArcadeUIResume";

function SiteLayout({ children }) {
  return (
    <>
      <CursorTrail />
      <RetroLayout>{children}</RetroLayout>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/start" replace />} />
      <Route path="/start" element={<StartScreen />} />
      <Route path="/home" element={<SiteLayout><Home /></SiteLayout>} />
      <Route path="/MLProjects" element={<SiteLayout><MLProjects /></SiteLayout>} />
      <Route path="/SEProjects" element={<SiteLayout><SEProjects /></SiteLayout>} />
      <Route path="/about" element={<SiteLayout><About /></SiteLayout>} />
      <Route path="/contact" element={<SiteLayout><Contact /></SiteLayout>} />
      <Route path="/ArcadeUIResume" element={<SiteLayout><ArcadeUIResume /></SiteLayout>} />
    </Routes>
  );
}