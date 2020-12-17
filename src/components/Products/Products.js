import React from "react";
import HeroSection from "../HeroSection";
import { homeObjFour } from "./Data";

function Products() {
  return (
    <div>
      <HeroSection {...homeObjFour} />
    </div>
  );
}

export default Products;
