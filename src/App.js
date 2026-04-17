import LogoBlueBg from "./assets/images/bls.png";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { DataProvider } from './dataContext/dataContext.js';
import ProtectedRoute from "./helpers/ProtectedRoute";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ImageCompressor from "./pages/Image-Compressor.js";
import Technology from "./pages/Technology";
import Brand from "./pages/Brand";
import Digital from "./pages/Digital";
import Quote from "./pages/Quote";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Businesslore</title>
        <meta name="description" content="Businesslore is a consulting firm that helps businesses with technology consulting, brand support, and digital content." />
        <meta name="keywords" content="businesslore, consulting, technology, brand, digital content" />
        <meta name="author" content="Businesslore" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={LogoBlueBg} />
      </Helmet>
      <Header />
      <center className="center-wrapper">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/:error" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/image_compressor" element={<ProtectedRoute element={<ImageCompressor />} />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </AnimatePresence>
      </center >
      <Footer />
    </>
  );
}

export default App;