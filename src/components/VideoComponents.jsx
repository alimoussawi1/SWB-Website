import React from "react";
import Mobile1 from "../assets/mobile1.mp4";

const VideoSection = () => {
  return (
    <div className="w-[75%] mx-auto flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 md:px-16 mt-10">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Explore new places
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Whether you’re looking for a bite to eat or fun night out, we’ve got
          you covered.
        </p>
      </div>

      {/* Video Section */}
      <div className="md:w-1/2">
        <video
          className="rounded-lg w-full h-[500px]"
          autoPlay
          loop
          muted
          playsInline // Ensures it works well on mobile browsers
          poster="video-thumbnail.jpg" // Replace with your video thumbnail
        >
          <source src={Mobile1} type="video/mp4" /> {/* Replace with your video file */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
