import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRoutes from "./app/PageRoutes";
import ScrollToTop from "./components/layout/ScrollToTop";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "./features/cart/cart";

export default function App() {


  // ##################### Handling Cart functionality ##################### //
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(fetchCartItems({ isAuthenticated }));
}, [isAuthenticated]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageRoutes />
    </BrowserRouter>
  );
}
