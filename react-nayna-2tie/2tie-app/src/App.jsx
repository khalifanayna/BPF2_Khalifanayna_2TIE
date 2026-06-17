import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";
import Loading from "./components/Loading";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Notes from "./pages/Notes";

// layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const VisitorLayout = React.lazy(() => import("./layouts/VisitorLayout"));

// pages dashboard
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// auth
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// visitor
const Home = React.lazy(() => import("./pages/Visitor/Home"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* DASHBOARD */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/peoducts/:id" element={<ProductDetail />} />
          <Route path="/notes" element={<Notes />} />
          
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* VISITOR (FOODIES) */}
        <Route path="/visitor" element={<VisitorLayout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </Suspense>
  );
}