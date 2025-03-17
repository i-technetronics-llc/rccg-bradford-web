import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';

const API_KEY = 'AIzaSyADSkPSIT4bm_T06qQrGwDfDuwXoiqiomc'; // Replace with your actual YouTube API key
const CHANNEL_ID = 'UCgloEjyfRwZmbFU4iHVvQJg'; // Replace with your actual YouTube channel ID

const fetchLiveStream = async () => {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        eventType: 'live',
        type: 'video',
        key: API_KEY,
      },
    });

    const liveStream = response.data.items[0] || null;
    return liveStream ? {
      id: liveStream.id.videoId,
      title: liveStream.snippet.title,
      description: liveStream.snippet.description,
      thumbnail: liveStream.snippet.thumbnails.high.url,
    } : null;
  } catch (error) {
    console.error('Error fetching live stream:', error);
    return null;
  }
};

const fetchPastEvents = async () => {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        eventType: 'completed',
        type: 'video',
        key: API_KEY,
        maxResults: 10,
      },
    });

    return response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
  } catch (error) {
    console.error('Error fetching past events:', error);
    return [];
  }
};

const LiveStreamPage = () => {
  const [liveVideo, setLiveVideo] = useState<any>(null);
  const [pastEvents, setPastEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const liveStream = await fetchLiveStream();
      setLiveVideo(liveStream);

      const pastEvents = await fetchPastEvents();
      setPastEvents(pastEvents);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Live Stream</h1>
      {liveVideo ? (
        <div>
          <h2>{liveVideo.title}</h2>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${liveVideo.id}`}
            playing
            controls
          />
          <p>{liveVideo.description}</p>
        </div>
      ) : (
        <p>No live stream currently available.</p>
      )}

      <h1>Past Events</h1>
      <ul>
        {pastEvents.map((event) => (
          <li key={event.id}>
            <a
              href={`https://www.youtube.com/watch?v=${event.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.title}
            </a>
            <p>{event.description}</p>
            <img src={event.thumbnail} alt={event.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveStreamPage;