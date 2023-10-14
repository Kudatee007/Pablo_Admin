import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resetpass from "./pages/Resetpass";
import Forgotpass from "./pages/Forgotpass";
import MainLayout from "./components/MainLayout";
import Enquires from "./pages/Enquires";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Colorlist from "./pages/Colorlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import Addproduct from "./pages/Addproduct";
import Addcolor from "./pages/Addcolor";
import Addcat from "./pages/Addcat";
import Addbrand from "./pages/Addbrand";
import Couponlist from "./pages/Couponlist";
import Addcoupon from "./pages/Addcoupon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpass />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquires />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="color" element={<Addcolor />} />
          <Route path="color-list" element={<Colorlist />} />
          <Route path="coupon" element={<Addcoupon />} />
          <Route path="coupon-list" element={<Couponlist />} />
          <Route path="category" element={<Addcat />} />
          <Route path="category-list" element={<Categorylist />} />
          <Route path="brand" element={<Addbrand />} />
          <Route path="brand/:id" element={<Addbrand />} />
          <Route path="brand-list" element={<Brandlist />} />
          <Route path="category-list" element={<Categorylist />} />
          <Route path="product-list" element={<Productlist />} />
          <Route path="product" element={<Addproduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
