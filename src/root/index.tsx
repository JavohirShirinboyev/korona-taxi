import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import Login from "../components/Login";

const Root = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              {navbar.map(({ path, element, id }) => {
                return <Route key={id} path={path} element={element} />;
              })}
            </Route>
            <Route path="*" element={<NotFound />} />
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default Root;
