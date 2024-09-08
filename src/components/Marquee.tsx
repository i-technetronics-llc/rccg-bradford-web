import Marquee from "react-fast-marquee";
import Image from "next/image";
import { IPictureGallery } from "@/models/utils.model";

type PictureGalleryProps = {
  pictureGalleries: IPictureGallery[];
};


export default function MarqueeImg( { pictureGalleries }: PictureGalleryProps ) {
  
  return (
    <div className="box bg-gradient-to-r from-primary to-secondary h-[400px] overflow-hidden">
      <Marquee speed={20} autoFill>
        {pictureGalleries.map((item, index) => (
          <><p className="text-xl md:text-2xl lg:text-3xl font-semibold">{item.pictureCategoryTitle}</p><img
            src={item.pictureCategoryImage.url}
            alt="logo"
            width={500}
            height={500}
            className="h-[500px] w-[500px]"
            key={index} /></>
        ))}
      </Marquee>
    </div>
  );
}
