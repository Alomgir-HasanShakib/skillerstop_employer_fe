import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

export default function MainLayout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-base-100">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div>
      <div className="sticky top-0 z-50">
         <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
      <Footer></Footer>
    </div>
  );
}
