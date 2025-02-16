import { formatDuration } from "../utils/helpers";
import StatItem from "./StatItem";

const StatItemContainer = ({ stats, duration }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <StatItem
        label="Views"
        value={parseInt(stats.viewCount).toLocaleString()}
      />
      <StatItem
        label="Likes"
        value={parseInt(stats.likeCount).toLocaleString()}
      />
      <StatItem
        label="Comments"
        value={parseInt(stats.commentCount).toLocaleString()}
      />
      <StatItem label="Duration" value={formatDuration(duration)} />
    </div>
  );
};

export default StatItemContainer;
