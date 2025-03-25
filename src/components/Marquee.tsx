import Marquee from "react-fast-marquee";
import Image from "next/image";
import { IHygraphPicturesArray, IPictureGallery } from "@/models/utils.model";
import Link from "next/link";

type PictureGalleryProps = {
  pictureGalleries: IHygraphPicturesArray[];
};

export default function MarqueeImg({ pictureGalleries }: PictureGalleryProps) {
  return (
    <>
     {/* <div className="max-w-xl mx-auto my-24 text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Share Your Testimony
    </h2>

    <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6">
      Has God done something amazing in your life? We'd love to hear your story! 
      Share your testimony to encourage and bless others.
    </p>

    <Link href='/contact' target="_blank">
              <button className="bg-primary rounded-full px-5 py-2 text-white font-semibold hover:bg-primary-dark transition">
               GIVE A TESTIMONY
              </button>
            </Link>
  </div> */}
    <div className="box bg-gradient-to-r from-primary to-secondary h-[400px] overflow-hidden">
      <Marquee speed={20} autoFill>
        {pictureGalleries.map((item, index) => (
          <>
            <img
              src={item.url}
              alt="logo"
              width={500}
              height={500}
              className="h-[500px] mr-5 w-[500px]"
              key={index}
            />
          </>
        ))}
      </Marquee>
    </div></>
  );
}
