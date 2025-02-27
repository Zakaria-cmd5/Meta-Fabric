interface Props {
  heading: string;
}

import { useState } from "react";
import {
  default as image1,
  default as image6,
} from "../../assets/brand-1.webp";
import {
  default as image2,
  default as image7,
} from "../../assets/brand-2.webp";
import {
  default as image3,
  default as image8,
} from "../../assets/brand-3.webp";
import {
  default as image4,
  default as image9,
} from "../../assets/brand-4.webp";
import {
  default as image10,
  default as image5,
} from "../../assets/brand-5.webp";

const SectionSlider = ({ heading }: Props) => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  const imagesPerPage = 5; // How many images to show per page
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.floor(images.length / imagesPerPage) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.floor(images.length / imagesPerPage) - 1
        : prevIndex - 1
    );
  };

  return (
    <div className="bg-white w-full py-8">
      <h2 className="text-center text-3xl font-bold mb-6">{heading}</h2>
      <div className="relative">
        {/* Image Container */}
        <div
          className="slider-container overflow-hidden w-full mx-auto"
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <div
            className="slider-images flex transition-all duration-700"
            style={{
              // Update the width of the images container to fit all images on a page
              width: `${imagesPerPage * 100}%`,
              transform: `translateX(-${
                (currentIndex * 100) / imagesPerPage
              }%)`,
              display: "flex",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="slider-image flex justify-center items-center"
                style={{ width: `${100 / imagesPerPage}%`, padding: "0 5px" }} // Adjust each image's width based on imagesPerPage
              >
                <img
                  src={image}
                  alt={`Brand ${index + 1}`}
                  className="w-[400px] h-[400px] object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SectionSlider;
