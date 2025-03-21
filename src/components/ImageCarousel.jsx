import { useEffect, useState, useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        images.map((img) => {
          return new Promise((resolve) => {
            const imgElement = new Image();
            imgElement.src = img.download_url;
            imgElement.onload = resolve;
          });
        })
      );
      setLoaded(true);
    };
    preloadImages();
  }, [images]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextImage();
    }, 2000); // Adjust for smoother transitions

    return () => clearInterval(intervalRef.current);
  }, [currentImage]);

  const prevImage = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative w-full max-w-4xl h-[500px] rounded-lg overflow-hidden shadow-xl bg-black">
      {!loaded ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-gray-400">
          Loading images...
        </div>
      ) : (
        <>
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <img
                key={image.id}
                src={image.download_url}
                alt={`Slide ${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-transform duration-1000 ${
                  index === currentImage
                    ? "opacity-100 scale-100 translate-x-0"
                    : "opacity-0 scale-90 translate-x-full"
                }`}
              />
            ))}
          </div>

          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition-all"
          >
            <FaAngleLeft className="text-white text-2xl" />
          </button>

          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition-all"
          >
            <FaAngleRight className="text-white text-2xl" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentImage ? "bg-white scale-125" : "bg-gray-600"
                } transition-all duration-300`}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
