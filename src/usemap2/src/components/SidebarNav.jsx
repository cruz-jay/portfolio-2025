import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
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
  const handleImageLoad = () => {
    setIsLoading(false);
    setImageLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      {(!imageLoaded || isLoading) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
          <Loader color="gray" size="xl" />
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
        style={{ opacity: imageLoaded ? 1 : 0 }}
      />
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          <button
            onClick={nextImage}
            disabled={isLoading}
            className={`bg-black/50 text-white px-4 py-2 rounded-lg 
              ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-black/70"
              }`}>
            Next
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
                        ? "bg-slate-800 text-white"
                        : "hover:bg-slate-50 hover:text-slate-950"
                    }`
                  }>
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
                        ? "bg-slate-800 text-white"
                        : "hover:bg-white hover:text-slate-950"
                    }`
                  }>
                  <span className="text-lg">Future Plans</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mt-4 flex-1 overflow-hidden">
            <Outlet />
          </div>
        </>
      ) : (
        <div className="relative h-full">
          <button
            onClick={() => setShowImages(false)}
            className="absolute top-6 right-6 z-10 p-2  rounded-full hover:bg-black/70 text-black">
            <X size={30} />
          </button>
          {currentCity?.images && (
            <div className="w-full h-full p-4">
              <ImageCarousel images={currentCity.images} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SidebarNav;
