import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";

function TvShowIndex() {
  return (
    <div>
      <BrowserRouter>
        <header className="d-flex flex-wrap justify-content-between bg-dark text-white p-3 w-100">
          <div>
            <h3 className="brand">MovieMania</h3>
          </div>
          <div className="mt-2">
            <span className="me-3">Home</span>
            <span className="me-3">Movies</span>
            <span className="me-3">Web Series</span>
          </div>
          <div className="mt-2">
            <span className="bi bi-heart me-3"></span>
            <span className="bi bi-person me-3"></span>
          </div>
        </header>
        <section className="mt-2">
          <Routes>
            <Route path="/" element={<ShowList />}></Route>
            <Route path="/details/:id" element={<ShowDetails />}></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default TvShowIndex;

