import StatItemContainer from "../components/StatItemContainer";
import { formatDate } from "../utils/helpers";

const Stats = ({ videoData, onBack }) => {
  const {
    title,
    channelTitle,
    publishedAt,
    description,
    tags,
    thumbnails,
    stats,
    duration,
  } = videoData;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-lufga">
      <div className="max-w-6xl mx-auto">
        <button
          className="mb-8 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
          onClick={() => onBack()}
        >
           Back to Search
        </button>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0">
            <img
              src={thumbnails?.maxres?.url || thumbnails?.standard?.url}
              alt={title}
              className="w-full md:w-96 rounded-lg shadow-xl"
            />
          </div>
          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-cyan-400 font-medium">{channelTitle}</span>
              {/* <span className="text-gray-400">-</span> */}
              <span className="text-gray-400">{formatDate(publishedAt)}</span>
            </div>
            <StatItemContainer stats={stats} duration={duration} />
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">
            Description
          </h3>
          <p className="whitespace-pre-line text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
