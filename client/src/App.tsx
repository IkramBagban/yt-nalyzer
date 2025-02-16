import { useState } from "react";
import "./App.css";
import SearchStats from "./pages/SearchStats";
import Stats from "./pages/Stats";

function App() {
  const [videoURL, setVideoURL] = useState("");
  const [isStatsPage, setIsStatsPage] = useState(false);
  const [videoData, setVideoData] = useState(null);

  const backClickHandler = () => setIsStatsPage(false)

  const searchHandler = async () => {
    if (!videoURL.trim()) {
      console.log("Please enter a YouTube video URL!");
      return;
    }

    try {
      console.log("Fetching data for:", videoURL);
      const response = await fetch(
        `http://localhost:3000/stats?videoUrl=${videoURL}`
      );

      if (!response.ok) {
        throw new Error(`Unexpected Error`);
      }

      const data = await response.json();
      console.log("✅ Data received:", data);
      setVideoData(data);
      setIsStatsPage(true);
    } catch (error) {
      console.error("Error fetching video stats:", error);
    }
  };

  return (
    <>
      {!isStatsPage ? (
        <SearchStats
          videoURL={videoURL}
          setVideoURL={setVideoURL}
          onSearchHandle={searchHandler}
        />
      ) : (
        <Stats videoData={videoData} onBack={backClickHandler}/>
      )}
    </>
  );
}

export default App;
