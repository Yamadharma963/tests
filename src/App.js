import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import History from "./pages/History";
import Enrollment from "./pages/Enrollment";
import Reports from "./pages/Reports";
import Perference from "./pages/Perference";
function App() {
  return (
    <div className="flex mainC">
      <Navbar />
      <Routes>
        <Route path="/" element={<History />}></Route>
        <Route path="/Enrollment" element={<Enrollment />}></Route>
        <Route path="/Reports" element={<Reports />}></Route>
        <Route path="/Perference" element={<Perference />}></Route>
      </Routes>
    </div>
  );
}

export default App;
