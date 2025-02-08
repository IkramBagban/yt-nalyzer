import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center border">
      <div className=" border space-y-10  ">
        <div className="font-bold text-lg">Get Stats Of Youtube Video. one click solution</div>
        <div className="flex flex-col ">
          <label htmlFor="videoUrl">Enter youtube video url Video URL</label>
          <div className="space-x-2">
            <input
              type="text"
              name="videoUrl"
              className="border w-120 p-3 rounded-md"
              placeholder="Enter youtube video URL"
            />
            <button className="w-40 border rounded-md p-3  bg-cyan-500 hover:bg-cyan-400 text-white ">
              check
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
