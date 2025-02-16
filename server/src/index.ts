import express from "express";
import axios from "axios";
import { URL } from "url";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

app.get("/stats", async (req: any, res: any) => {
  try {
    const videoUrl = req.query.videoUrl as string;
    if (!videoUrl) {
      return res
        .status(400)
        .json({ error: "videoUrl is required as a query parameter" });
    }

    console.log("videoUrl", videoUrl);
    const videoId = new URL(videoUrl).searchParams.get("v");
    console.log("videoId", videoId);
    if (!videoId) {
      return res.status(400).json({ error: "Invalid YouTube URL" });
    }

    console.log({
      RAPIDAPI_HOST: process.env.RAPIDAPI_HOST,
      RAPIDAPI_KEY: process.env.RAPIDAPI_KEY,
    });

    const response = await axios.get(
      `https://youtube-v31.p.rapidapi.com/videos`,
      {
        params: {
          id: videoId,
          part: "contentDetails,snippet,statistics",
        },
        headers: {
          "x-rapidapi-host": process.env.RAPIDAPI_HOST,
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
      }
    );

    console.log("data", response.data);
    if (response.status === 200) {
      const data = response.data;
      const item = data.items[0];
      console.log("item,item", item);

      res.status(200).json({
        videoId: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        channelTitle: item.snippet.channelTitle,
        channelId: item.snippet.channelId,
        publishedAt: item.snippet.publishedAt,
        thumbnails: item.snippet.thumbnails,
        tags: item.snippet.tags || [],
        duration: item.contentDetails.duration,
        stats: item.statistics,
      });
    }else {
      throw Error("Invalid url")
    }
  } catch (error) {
    console.error("Error fetching related videos:", error);
    res.status(500).json({ error: "Failed to fetch related videos" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
