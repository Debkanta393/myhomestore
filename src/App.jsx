import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import HomePage from "./pages/Home";
import Product from "./pages/Product";
import Brand from "./pages/Brand";
import ClaverChoise from "./pages/CleverChoice";
import EngineeredOak from "./pages/EngineeredOak";


export default function App() {

  


  return (
    <Routes>
      {/* Layout Route */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:type/:productName" element={<Product />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/cleverchoice" element={<ClaverChoise />} />
        <Route path="/engineered-oak" element={<EngineeredOak />} />
      </Route>
    </Routes>
  );
}
