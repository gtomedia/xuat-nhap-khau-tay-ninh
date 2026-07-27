import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import useGlobalScrollAnimations from "@/hooks/useGlobalScrollAnimations";
import ScrollToTop from "@/components/ScrollToTop";
import { useAppStore } from "@/store/useAppStore";
import "@/App.css";

function App() {
  // Enable scroll animations globally
  useGlobalScrollAnimations();
  const title = useAppStore((state) => state.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Router>
      <div className="app-container">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
