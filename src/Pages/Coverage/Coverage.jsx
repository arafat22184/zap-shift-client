import React from "react";
import CoverageMap from "./CoverageMap";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center">
        We are available in 64 districts
      </h2>

      {/* Map Display */}
      <CoverageMap serviceCenters={serviceCenters} />
    </div>
  );
};

export default Coverage;
