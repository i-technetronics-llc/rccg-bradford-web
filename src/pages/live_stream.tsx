import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function LiveStreamPage() {
  const [liveVideoId, setLiveVideoId] = useState<string | null>(null);
  const [pastEvents, setPastEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    async function fetchLiveStream() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
        );
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          setLiveVideoId(data.items[0].id.videoId);
        } else {
          setLiveVideoId(null);
        }
      } catch (err) {
        console.error("Error fetching live stream:", err);
        setError("Error fetching live stream data.");
      } finally {
        setLoading(false);
      }
    }

    async function fetchPastEvents() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&key=${apiKey}&maxResults=10&order=date`
        );
        const data = await res.json();

        if (data.items) {
          setPastEvents(data.items);
        }
      } catch (err) {
        console.error("Error fetching past events:", err);
      }
    }

    // Initial fetch on component mount
    fetchLiveStream();
    fetchPastEvents();

    // Set intervals
    const liveInterval = setInterval(fetchLiveStream, 6000000000); // Every 10 minutes
    const pastInterval = setInterval(fetchPastEvents, 86400000); // Every 24 hours

    return () => {
      clearInterval(liveInterval);
      clearInterval(pastInterval);
    };
  }, [channelId, apiKey]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-12">
        {loading && <p className="text-center">Loading live stream...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Live Stream Section */}
        <section className="mb-12 h-[300px]">
        <div className="px-8 py-4 mt-[40px]">
              <p className="text-xl md:text-3xl lg:text-4xl ">LIVE NOW</p>
              <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>
          {liveVideoId ? (
            <div className="flex justify-center">
              <iframe
                className="w-full max-w-4xl h-60 sm:h-80 md:h-96 lg:h-[500px]"
                src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Live Stream"
              ></iframe>
            </div>
          ) : (
            !loading && <p className="flex justify-center text-gray-500 items-center h-40 text-center">No live stream is currently active.</p>

          )}
        </section>

        {/* Past Live Events Section */}
        <section>
        <div className="px-8 py-4 mb-8 mt-[40px]">
              <p className="text-xl md:text-3xl lg:text-4xl  ">PAST LIVE EVENTS</p>
              <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {pastEvents.map((event) => (
                <div key={event.id.videoId} className="shadow-lg rounded overflow-hidden">
                  <iframe
                    className="w-full h-56 sm:h-64 md:h-72"
                    src={`https://www.youtube.com/embed/${event.id.videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={event.snippet.title}
                  ></iframe>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{event.snippet.title}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(event.snippet.publishedAt).toLocaleString()}
                    </p>
                  </div>
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
