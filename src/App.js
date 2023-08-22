import React from "react";
import Navbar from "./components/molecules/Navbar";
import Hero from "./components/molecules/Hero";
import Analytics from "./components/molecules/Analytics";
import Newsletter from "./components/molecules/Newsletter";
import Cards from "./components/molecules/Cards";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
