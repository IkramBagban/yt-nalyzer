import express from 'express';
import axios from 'axios';
import { URL } from 'url';
import dotenv from 'dotenv'

const app = express();
app.use(express.json());

dotenv.config()


app.get('/search-related', async (req: any, res: any) => {
  try {
    const videoUrl = req.query.videoUrl as string;
    if (!videoUrl) {
      return res.status(400).json({ error: 'videoUrl is required as a query parameter' });
    }

    console.log('videoUrl', videoUrl)
    const videoId = new URL(videoUrl).searchParams.get('v');
    console.log('videoId',videoId)
    if (!videoId) {
      return res.status(400).json({ error: 'Invalid YouTube URL' });
    }


    const response = await axios.get(`${process.env.RAPIDAPI_HOST}/search`, {
      params: {
        relatedToVideoId: videoId,
        part: 'id,snippet',
        type: 'video',
        maxResults: 50,
      },
      headers: {
        'x-rapidapi-host': process.env.RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching related videos:', error);
    res.status(500).json({ error: 'Failed to fetch related videos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
