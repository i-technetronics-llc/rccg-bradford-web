import Marquee from "react-fast-marquee";
import Image from "next/image";
import { IHygraphPicturesArray, IPictureGallery } from "@/models/utils.model";

type PictureGalleryProps = {
  pictureGalleries: IHygraphPicturesArray[];
};

export default function MarqueeImg({ pictureGalleries }: PictureGalleryProps) {
  return (
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
    </div>
  );
}
