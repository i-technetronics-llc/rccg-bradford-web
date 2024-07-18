import React from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";

export default function VideoGallery() {
    const videos = [
        {
          id: '1',
          title: 'Multicultural Sunday',
          thumbnailUrl: 'https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg',
          videoUrl: '',
        },
        {
          id: '2',
          title: 'Youth Presentation',
          thumbnailUrl: 'https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg',
          videoUrl: '',
        },
        {
          id: '3',
          title: 'Chapel of His Glory – Our Vision',
          thumbnailUrl: 'https://img.youtube.com/vi/lPrIb8V-sAA/sddefault.jpg',
          videoUrl: '',
        },
        {
            id: '4',
            title: 'Mothers’ Day',
            thumbnailUrl: 'https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg',
            videoUrl: '',
          },
          {
            id: '5',
            title: 'Teens’ Choreography',
            thumbnailUrl: 'https://img.youtube.com/vi/s79vCWXYI4Y/sddefault.jpg',
            videoUrl: 'https://youtube.com/embed/s79vCWXYI4Y?si=DjfHcG14MGzpeE-2',
          },
          {
            id: '6',
            title: 'Higher Ground 2018',
            thumbnailUrl: 'https://img.youtube.com/vi/VgcM-dqgny8/sddefault.jpg',
            videoUrl: '',
          },
          {
            id: '7',
            title: '',
            thumbnailUrl: 'https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg',
            videoUrl: '',
          },
          {
            id: '8',
            title: '',
            thumbnailUrl: 'https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg',
            videoUrl: '',
          },
      ];

    return (
      <div className="">
        <Header />
        <p className="text-xl md:text-3xl lg:text-4xl px-8 py-4">VIDEO GALLERY</p>
        <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
        <VideoCard videos={videos} />
        <Footer />
        </div>
       );
    }  