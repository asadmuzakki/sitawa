import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Interval 3 detik

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full  overflow-hidden pb-14 ">
      <div className="relative flex items-center justify-center w-full h-full z-0 ">
        {/* <button
          className="absolute left-72 z-[9999] top-1/2 transform -translate-y-1/2 "
          onClick={goToPrevious}
        >
          <span>
            <svg
              width="21"
              height="29"
              viewBox="0 0 21 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 28.2404L0 14.1202L21 0V28.2404Z"
                fill="white"
              />
            </svg>
          </span>
        </button> */}
        <img
          src={images[(currentIndex - 1 + images.length) % images.length]}
          alt=""
          className="img-carousel absolute w-[665px] h-[418px] object-cover opacity-70 rounded-xl shadow-xl "
          style={{ left: "10%" }}
        />
        <img
          src={images[currentIndex]}
          alt=""
          className="img-carousel-mid relative w-[880px] h-[490px] object-cover z-10 rounded-xl shadow-xl  "
        />
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt=""
          className="img-carousel absolute w-[665px] h-[418px] object-cover opacity-70 rounded-xl shadow-xl transition-opacity duration-700 ease-in-out"
          style={{ right: "10%" }}
        />
        {/* <button
          className="absolute right-72 z-[9999] top-1/2  transform -translate-y-1/2 "
          onClick={goToNext}
        >
          <span>
            <svg
              width="18"
              height="29"
              viewBox="0 0 18 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 28.2404L17.25 14.1202L0 0V28.2404Z"
                fill="white"
              />
            </svg>
          </span>
        </button> */}
      </div>
      <div className=" absolute  bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2  items-center">
        {images.map((_, index) => (
          <button
            key={index}
            className={`rounded-full ${
              currentIndex === index
                ? "dot-carousels bg-custom-gradient w-2 h-2"
                : "dot-carousels bg-gray-300 w-2 h-2"
            } transition-colors duration-300 ease-in-out`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
