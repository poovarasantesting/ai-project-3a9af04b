import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import PropertyDetailsPage from "@/pages/PropertyDetailsPage";
import MapViewPage from "@/pages/MapViewPage";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
          <Route path="/map" element={<MapViewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}