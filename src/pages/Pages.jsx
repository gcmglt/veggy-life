import Home from "./Home";
import Dishes from "./Dishes";
import Searched from "./Searched";
import Recipe from "./Recipe";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes
        Location={location}
        key={location.pathname}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/dishes/:type"
          element={<Dishes />}
        />
        <Route
          path="/searched/:search"
          element={<Searched />}
        />
        <Route
          path="/recipe/:name"
          element={<Recipe />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
