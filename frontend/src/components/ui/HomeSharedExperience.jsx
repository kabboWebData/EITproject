import React from "react";
import HSharedExperienceCard from "./HSharedExperienceCard";

const HomeSharedExperience = () => {
  return (
    <div className="text-center">
      <h4 className="text-red-500 text-xl">Testimonials</h4>
      <h1 className="text-4xl font-bold my-3">Shared Successfull Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <HSharedExperienceCard />
        <HSharedExperienceCard />
        <HSharedExperienceCard />
      </div>
    </div>
  );
};

export default HomeSharedExperience;
