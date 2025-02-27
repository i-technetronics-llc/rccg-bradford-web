import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LiveStreamPage() {
  const [liveVideoId, setLiveVideoId] = useState<string | null>(null);
  const [pastEvents, setPastEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Get channel ID and API key from environment variables
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    async function fetchYouTubeData() {
      try {
        // Fetch current live stream
        const liveRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
        );
        const liveData = await liveRes.json();
        if (liveData.items && liveData.items.length > 0) {
          setLiveVideoId(liveData.items[0].id.videoId);
        } else {
          setLiveVideoId(null);
        }

        // Fetch past live events (completed)
        const pastRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&key=${apiKey}&maxResults=6`
        );
        const pastData = await pastRes.json();
        if (pastData.items) {
          setPastEvents(pastData.items);
        } else {
          setPastEvents([]);
        }
      } catch (err) {
        console.error("Error fetching YouTube data:", err);
        setError("Error fetching live stream data.");
      } finally {
        setLoading(false);
      }
    }

    // Fetch immediately on mount and then every 60 seconds
    fetchYouTubeData();
    const interval = setInterval(fetchYouTubeData, 60000);
    return () => clearInterval(interval);
  }, [channelId, apiKey]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12">
        {loading && (
          <div className="text-center">
            <p>Loading live stream...</p>
          </div>
        )}
        {error && (
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        )}

        {/* Live Stream Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center md:pt-24 pt-10 mb-6">Live Now</h2>
          {liveVideoId ? (
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <iframe
                  className="w-full h-60 sm:h-80 md:h-96 lg:h-[500px]"
                  src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Live Stream"
                ></iframe>
              </div>
            </div>
          ) : (
            !loading && (
              <p className="text-center">No live stream is currently active.</p>
            )
          )}
        </section>

        {/* Past Live Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Past Live Events</h2>
          {pastEvents.length > 0 ? (
            <div className="space-y-4">
              {pastEvents.map((event) => (
                <div
                  key={event.id.videoId}
                  className="border rounded overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col sm:flex-row items-center"
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${event.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full"
                  >
                    <img
                      src={event.snippet.thumbnails.medium.url}
                      alt={event.snippet.title}
                      className="w-full sm:w-40 h-auto object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {event.snippet.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {new Date(event.snippet.publishedAt).toLocaleString()}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No past live events found.</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
