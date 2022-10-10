import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import CreateSpaceshipPage from "./pages/CreateSpaceshipPage";
import SpaceshipPage from "./pages/SpaceshipPage";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<SpaceshipPage />} />
      <Route path="/spaceship" element={<SpaceshipPage />} />
      <Route path="/spaceship/create" element={<CreateSpaceshipPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
