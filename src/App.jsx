import ImageCarousel from "./components/ImageCarousel";
import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setError(null);
        const response = await fetch("https://picsum.photos/v2/list?limit=10");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl shadow-xl rounded-xl bg-[#0f0f0f] p-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-14 h-14 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-400 text-lg font-medium">
              Loading stunning images...
            </p>
          </div>
        ) : error ? (
          <h1 className="text-red-500 text-lg text-center">{error}</h1>
        ) : (
          <ImageCarousel images={images} />
        )}
      </div>
    </div>
  );
}

export default App;