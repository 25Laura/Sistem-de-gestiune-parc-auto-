import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import VehiculePage from "./pages/VehiculePage.jsx";
import VehiculDetaliuPage from "./pages/VehiculDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<VehiculePage />} />
        <Route path="/vehicule/:id" element={<VehiculDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
