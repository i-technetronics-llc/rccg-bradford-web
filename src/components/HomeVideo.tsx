import Link from 'next/link';

export default function HomeVideo() {
  return (
    <section className="relative flex items-center justify-center h-screen mb-12 lg:mt-[100px]  overflow-hidden  ">
      <div className="relative z-20  text-center text-white max-w-4xl mx-auto">
        <h1 className="text-4xl text-white sm:text-6xl font-bold mb-4">
          Welcome to RCCG Chapel of His Glory, Bradford
        </h1>
        <p className="text-xl sm:text-2xl leading-relaxed">
          Join us online to access sermons, events, and resources tailored for
          you. Engage, donate, and grow with us in our digital space.
        </p>
        <div className="flex items-center justify-center mt-5">
  <ul className="flex space-x-4">
    <li className="px-5 py-2 bg-primary w-fit rounded-full">
      <Link href="/watchLive">
        Watch Live
      </Link>
    </li>
    <li className="px-5 py-2 bg-primary w-fit rounded-full">
      <Link href="/videoGallery">
        Watch Sermon
      </Link>
    </li>
  </ul>
</div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
