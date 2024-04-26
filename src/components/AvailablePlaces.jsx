import { useState, useEffect } from "react";
import Places from "./Places.jsx";

const places = localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/places");
      const redData = await response.json();
      setAvailablePlaces(redData.places);
    }

    fetchData();
  }, []);

  console.log(availablePlaces);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={false}
      loadingText="Places data is loading..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
