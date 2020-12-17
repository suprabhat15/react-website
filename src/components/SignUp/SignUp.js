import React from "react";
import { homeObjThree } from "./Data";
import HeroSection from "../HeroSection";
import Pricing from "../Pricing";

function SignUp() {
  return (
    <div>
      <Pricing />
      <HeroSection {...homeObjThree} />
    </div>
  );
}

export default SignUp;
