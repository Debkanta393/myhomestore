import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRoutes from "./app/PageRoutes";
import ScrollToTop from "./components/layout/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageRoutes />
    </BrowserRouter>
  );
}
