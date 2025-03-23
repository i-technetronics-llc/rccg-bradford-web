import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Play } from "lucide-react"; // Import Lucide React Play Icon

export default function VideoGallery() {
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [videos, setVideos] = useState<{ [key: string]: any[] }>({});
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const maxVideosPerLoad = 6;

  useEffect(() => {
    async function fetchPlaylists() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=10&key=${apiKey}`
        );
        const data = await res.json();
        if (data.items) {
          setPlaylists(data.items);
        }
      } catch (err) {
        console.error("Error fetching playlists:", err);
        setError("Failed to fetch playlists.");
      } finally {
        setLoading(false);
      }
    }
    fetchPlaylists();
  }, [channelId, apiKey]);

  async function fetchVideos(
    playlistId: string,
    nextPageToken: string | null = null
  ) {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxVideosPerLoad}&key=${apiKey}`
      );
      const data = await res.json();
      setVideos((prev) => ({
        ...prev,
        [playlistId]: [...(prev[playlistId] || []), ...data.items],
      }));
    } catch (err) {
      console.error(`Error fetching videos for playlist ${playlistId}:`, err);
      setError("Failed to fetch videos.");
    }
  }

  useEffect(() => {
    if (playlists.length > 0) {
      playlists.forEach((playlist) => {
        fetchVideos(playlist.id);
      });
    }
  }, [playlists]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="px-8 mt-[80px] py-4 ">
              <p className="text-xl md:text-3xl lg:text-4xl ">VIDEO GALLERY</p>
              <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12 ">
        {loading && <p className="text-center">Loading videos...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        

        {/* Video Gallery */}
        {playlists.map((playlist) => (
          <div key={playlist.id} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              {playlist.snippet.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(videos[playlist.id] || []).filter(video => video.snippet.thumbnails?.medium).map((video) => (
  <div key={video.snippet.resourceId.videoId} className="cursor-pointer group">
    <div className="relative" onClick={() => setSelectedVideo(video.snippet.resourceId.videoId)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
      />
      {/* Play Icon Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
        <Play size={48} color="white" className="drop-shadow-lg" />
      </div>
    </div>
    {/* Title stays outside the overlay */}
    <p className="mt-2 text-sm text-gray-700">{video.snippet.title}</p>
  </div>
))}

            </div>

            {/* Load More Button */}
            {videos[playlist.id]?.length <
              playlist.contentDetails?.itemCount && (
              <button
                onClick={() => fetchVideos(playlist.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Load More
              </button>
            )}
          </div>
        ))}

        {/* Modal for Video Playback */}
        {selectedVideo && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setSelectedVideo(null)} // Close when clicking on the background
          >
            <div
              className="relative w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={() => setSelectedVideo(null)}
              >
                ×
              </button>
              <iframe
                className="w-full h-64 sm:h-80 md:h-96"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
