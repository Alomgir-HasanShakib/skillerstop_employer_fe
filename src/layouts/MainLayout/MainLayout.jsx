import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function MainLayout() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),1000);
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
      <ScrollToTop></ScrollToTop>
      <div className="sticky top-0 z-50">
         <Navbar></Navbar>
      </div>
     <Suspense fallback={<Loading />}>
         <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}
