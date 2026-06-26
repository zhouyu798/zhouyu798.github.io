import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.jsx";

const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<div className="min-h-screen bg-soft" />}>
              <ProjectDetail />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
