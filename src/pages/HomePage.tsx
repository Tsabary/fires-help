import { useCallback, useEffect, useState } from "react";
import { handleError, useFeed } from "@replyke/react-js";
import { useNavigate } from "react-router-dom";

import TasksFeed from "../components/home/TasksFeed";
import { LocationSelectorDialog } from "../components/shared/LocationSelectorDialog";
import { RadiusSelectorDialog } from "../components/shared/RadiusSelectorDialog";
import CategoryFilters from "../components/home/CategoryFilters";
import LocationFilters from "../components/home/LocationFilters";
import WelcomeDialog from "../components/home/WelcomeDialog";

function HomePage() {
  const navigate = useNavigate();
  const {
    setLocationFilters,
    updateKeywordsFilters,
    kickstart,
    hasMore,
    loadMore,
  } = useFeed();

  const [isLocationDialogOpen, setIsLocationDialogOpen] = useState(false);
  const [isRadiusDialogOpen, setIsRadiusDialogOpen] = useState(false);
  const [isWelcomeDialogOpen, setIsWelcomeDialogOpen] = useState(false);

  const [categories, setCategories] = useState<TaskCategory[]>([]);
  const [location, setLocation] = useState<{
    name: string;
    coordinates: { lat: number; lng: number };
  } | null>(null);

  const [radius, setRadius] = useState(48000);
  const [isKm, setIsKm] = useState(false);

  const handleScroll = useCallback(async () => {
    try {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        hasMore
      ) {
        loadMore?.();
      }
    } catch (err) {
      handleError(err, "Fetching new entities failed");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Save location locally whenever it changes
  useEffect(() => {
    if (location) {
      localStorage.setItem("location", JSON.stringify(location));
      setLocationFilters?.({
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
        radius,
      });
      kickstart?.();
    }
  }, [location, radius]);

  // Load location on launch
  useEffect(() => {
    const savedLocation = localStorage.getItem("location");
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
    } else {
      setIsLocationDialogOpen(true); // Open dialog if no saved location
    }
  }, []);

  // check if seen welcome message
  useEffect(() => {
    const welcomeViewed = localStorage.getItem("welcome-viewed");
    if (!welcomeViewed) {
      navigate("/welcome");
    }
  }, []);

  useEffect(() => {
    updateKeywordsFilters?.("replace", "includes", categories);
  }, [categories]);

  return (
    <>
      <WelcomeDialog
        isDialogOpen={isWelcomeDialogOpen}
        setIsDialogOpen={setIsWelcomeDialogOpen}
      />
      <LocationSelectorDialog
        isDialogOpen={isLocationDialogOpen}
        setIsDialogOpen={setIsLocationDialogOpen}
        setLocation={setLocation}
      />
      <RadiusSelectorDialog
        isDialogOpen={isRadiusDialogOpen}
        setIsDialogOpen={setIsRadiusDialogOpen}
        isKm={isKm}
        setIsKm={setIsKm}
        radius={radius}
        setRadius={setRadius}
      />
      <div className="w-full max-w-7xl grid gap-4">
        <h1 className="text-2xl font-bold mx-2 mb-4">How could you help?</h1>

        <CategoryFilters
          categories={categories}
          setCategories={setCategories}
        />

        <LocationFilters
          setIsLocationDialogOpen={setIsLocationDialogOpen}
          setIsRadiusDialogOpen={setIsRadiusDialogOpen}
          isKm={isKm}
          radius={radius}
          location={location}
        />

        <TasksFeed isKm={isKm} location={location} />
      </div>
    </>
  );
}

export default HomePage;
