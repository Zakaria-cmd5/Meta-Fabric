import { useEffect, useRef, useState } from "react";
import swiper1 from "../../assets/swiper-1.png";
import swiper2 from "../../assets/swiper-2.png";
import swiper3 from "../../assets/swiper-3.png";

const ImageSlider = () => {
  const images = [swiper1, swiper2, swiper3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Go to next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to previous slide
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Touch event handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goToNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      goToPrev();
    }
  };

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(goToNext, 5000);
    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{ height: "600px" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 h-full relative"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Text Overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold p-4">
              {/* This is where you can put your text */}
              <p>Slide {idx + 1} - Amazing Cars</p>
            </div>

            {/* Add shadow effect */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
      >
        Prev
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
