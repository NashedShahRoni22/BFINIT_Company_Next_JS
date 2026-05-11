import React from "react";
import { PulseLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <PulseLoader
        color={"#321370"}
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
