import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import AuthPage from "@/pages/auth";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
        <Toaster />
      </main>
    </BrowserRouter>
  );
}

export default App;