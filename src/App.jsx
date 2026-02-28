import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import HomePage from "./pages/Home";
import Product from "./pages/Product";
import Brand from "./pages/Brand";
import ClaverChoise from "./pages/CleverChoice";
import EngineeredOak from "./pages/EngineeredOak";
import Payment from "./pages/Payment";
import BambooFlooring from "./pages/BambooFlooring"
import Benchtops from "./pages/Benchtops"
import CladdingScreens from "./pages/CladdingScreens"
import Decking from "./pages/Decking"
import FencingGates from "./pages/FencingGates"
import HybridFlooring from "./pages/HybridFlooring"
import HydroLaminate from "./pages/HydroLaminate"
import LaminateFlooring from "./pages/LaminateFlooring"
import Panels from "./pages/Panels"
import TimberFlooring from "./pages/TimberFlooring"
import VinylFlooring from "./pages/VinylFlooring"
import EcoGreen from "./pages/EcoGreen"
import PreferenceFloor from "./pages/PreferenceFloor"
import HurfordsFlooring from "./pages/HurfordsFlooring"



export default function App() {

  


  return (
    <Routes>
      {/* Layout Route */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/:range/:productName" element={<Product />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/cleverchoice" element={<ClaverChoise />} />
        <Route path="/ecogreen" element={<EcoGreen />} />
        <Route path="/preference-floor" element={<PreferenceFloor />} />
        <Route path="/hurfords-flooring" element={<HurfordsFlooring />} />
        <Route path="/engineered-oak" element={<EngineeredOak />} />
        <Route path="/bamboo-flooring" element={<BambooFlooring />} />
        <Route path="/benchtops" element={<Benchtops />} />
        <Route path="/cladding-screens" element={<CladdingScreens />} />
        <Route path="/decking" element={<Decking />} />
        <Route path="/fencinggates" element={<FencingGates />} />
        <Route path="/hybrid-flooring" element={<HybridFlooring />} />
        <Route path="/hydro-laminate" element={<HydroLaminate />} />
        <Route path="/laminate-flooring" element={<LaminateFlooring />} />
        <Route path="/panels" element={<Panels />} />
        <Route path="/timber-flooring" element={<TimberFlooring />} />
        <Route path="/vinyl-flooring" element={<VinylFlooring />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Routes>
  );
}
