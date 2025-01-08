import React from "react";
import Image from "../assets/pic1.png"; 
import Image1 from "../assets/pic2.png"; 
import Image2 from "../assets/pic3.png"; 
const PictureWithButton = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen bg-white  gap-5">
      {[Image, Image1, Image2].map((image, index) => (
        <div
          key={index}
          className="relative h-[500px] w-[30%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </div>
  );
};

export default PictureWithButton;