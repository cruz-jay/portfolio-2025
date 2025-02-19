import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { UseCities } from "../Context/Data";

const Map = () => {
  const { currentCity } = UseCities();

  const INITIAL_CENTER = [-115.148307, 36.15818];
  const INITIAL_ZOOM = [3.5];

  const [center, setCenter] = useState(INITIAL_CENTER);
  const [zoom, setZoom] = useState(INITIAL_ZOOM);

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && currentCity) {
      mapRef.current.flyTo({
        center: [currentCity.position.lng, currentCity.position.lat],
        zoom: 10,
        duration: 2000,
      });
    }
  }, [currentCity]);

  useEffect(() => {
    if (mapRef.current) return;

    mapboxgl.accessToken =
      "pk.eyJ1IjoiamF5YzEyMyIsImEiOiJjbTc4ZHBmOHoxaGJyMmlxOHVrMDM4YnJhIn0.AMLM1NWebQnxueRx0AWiqw";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/jayc123/cm78dxqdr00fq01sq7l886d48",
      center: center,
      zoom: zoom,
    });

    setTimeout(() => {
      mapRef.current.resize();
    }, 0);

    mapRef.current.on("move", () => {
      const mapCenter = mapRef.current.getCenter();
      const mapZoom = mapRef.current.getZoom();

      setCenter([mapCenter.lng, mapCenter.lat]);
      setZoom(mapZoom);
    });

    mapRef.current.on("click", (event) => {
      const features = mapRef.current.queryRenderedFeatures(event.point, {
        layers: ["poi"],
      });

      if (!features.length) {
        return;
      }

      const feature = features[0];

      new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(mapRef.current);
    });

    mapRef.current.on("click", (event) => {
      const features = mapRef.current.queryRenderedFeatures(event.point, {
        layers: ["poi-future"],
      });

      if (!features.length) {
        return;
      }

      const feature = features[0];

      new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        .addTo(mapRef.current);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <div className="sidebar">
        Longitude: {center[0]} | Latitude: {center[1]} | Zoom: {zoom}
      </div>
      <div
        ref={mapContainerRef}
        className="w-full"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
    </>
  );
};

export default Map;
