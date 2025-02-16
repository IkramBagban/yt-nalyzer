import React from "react";

const SearchStats = ({
  videoURL,
  setVideoURL,
  onSearchHandle,
}: {
  videoURL: string;
  setVideoURL: React.Dispatch<React.SetStateAction<string>>;
  onSearchHandle: any;
}) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
      <div className="w-[50vw] min-w-[350px] h-[40vh] flex flex-col justify-center items-center space-y-6 border-2 border-cyan-500 rounded-lg p-6 ">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-cyan-300">
            YouTube Video Stats Checker
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Get instant insights on any YouTube video with one click!
          </p>
        </div>

        <div className="w-full flex flex-col space-y-2">
          <label htmlFor="videoUrl" className="text-cyan-300 font-medium">
            Enter YouTube Video URL
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              name="videoUrl"
              className="w-full p-3 rounded-md bg-transparent border border-cyan-500 text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none placeholder-gray-400"
              placeholder="Paste the YouTube video link..."
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
            />
            <button
              className="w-40 p-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition duration-300"
              onClick={onSearchHandle}
            >
              Check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchStats;
