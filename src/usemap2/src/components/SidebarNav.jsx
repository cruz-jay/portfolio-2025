import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, Map, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { UseCities } from "../Context/Data";
import Loader from "./Loader";

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  const nextImage = () => {
    setIsLoading(true);
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIsLoading(true);
    setImageLoaded(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageLoaded(true);
  };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/20 backdrop-blur-sm">
      {(!imageLoaded || isLoading) && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10">
          <Loader color="blue" size="xl" />
        </div>
      )}
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-full object-contain rounded-lg"
        onLoad={handleImageLoad}
        onError={(e) => {
          console.error("Image failed to load:", e);
          setIsLoading(false);
        }}
        style={{
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />

      {/* Image counter */}
      <div className="absolute top-4 left-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
          <button
            onClick={prevImage}
            disabled={isLoading}
            className={`bg-black/50 text-white p-2 rounded-full 
              ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-black/70"
              }`}>
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            disabled={isLoading}
            className={`bg-black/50 text-white p-2 rounded-full 
              ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-black/70"
              }`}>
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

function SidebarNav() {
  const [showImages, setShowImages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentCity } = UseCities();

  useEffect(() => {
    const handleImageTransition = async () => {
      if (currentCity?.images?.length > 0) {
        setIsLoading(true);
        try {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setShowImages(true);
        } finally {
          setIsLoading(false);
        }
      } else {
        setShowImages(false);
      }
    };

    handleImageTransition();
  }, [currentCity]);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full relative">
      {!showImages ? (
        <>
          <nav>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="cities"
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-blue-800/50 text-white shadow-md"
                        : "hover:bg-slate-800/70 hover:text-blue-200"
                    }`
                  }>
                  <Map className="mr-3" size={20} />
                  <span className="text-lg">Old Familiar Places</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Future"
                  className={({ isActive }) =>
                    `flex items-center p-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-blue-800/50 text-white shadow-md"
                        : "hover:bg-slate-800/70 hover:text-blue-200"
                    }`
                  }>
                  <Calendar className="mr-3" size={20} />
                  <span className="text-lg">Future Plans</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mt-6 flex-1 overflow-hidden rounded-lg">
            <Outlet />
          </div>
        </>
      ) : (
        <div className="relative h-full rounded-lg overflow-hidden">
          <button
            onClick={() => setShowImages(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-slate-900/70 rounded-full hover:bg-slate-800 text-white transition-colors">
            <X size={24} />
          </button>
          {currentCity?.images && (
            <div className="w-full h-full p-2">
              <ImageCarousel images={currentCity.images} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SidebarNav;
