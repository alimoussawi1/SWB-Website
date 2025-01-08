import React from "react";
import Paragraph2 from "../assets/paragraph2.png"

const PictureWithText1 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Text on the Left */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          POSITIVE BRAND ASSOCIATION
        </h2>
        <p className="text-gray-600">
          Enhance your brand's reputation by supporting education and gaining recognition through a platform dedicated to helping students.
        </p>
      </div>

      {/* Image on the Right */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={Paragraph2} // Replace with your image URL
          alt="Sample Title"
          className="rounded-lg object-cover max-h-72" // Increased max height
        />
      </div>
    </div>
  );
};

export default PictureWithText1;
