import React, { useState, useEffect } from "react";

export default function OurLeadersSection() {
  const images = ["/img/pass3.png", "/img/pasW.png", "/img/pass2.png" ]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 bg-gray-50">
      {/* Section Title & Leader Names */}
      <div className="w-fit flex flex-col gap-2 px-6 py-24 mx-auto">
        <p className="text-xl md:text-xl lg:text-2xl font-sm text-center">
          MEET OUR LEADERS
        </p>
        <div className="text-center">
          <p className="text-lg md:text-3xl font-bold">
            PASTOR DARA SHOFOLUWE &amp; PASTOR (MRS) ABIOLA SHOFOLUWE
          </p>
          <p className="text-sm md:text-base text-gray-600">
            Parish Pastor &amp; Co-Parish Pastor
          </p>
        </div>
        <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary mx-auto"></div>
      </div>

      {/* Centered Image with Auto-Switching */}
      <div className="w-full flex justify-center">
        <div className="max-w-md relative">
          <img
            src={images[currentIndex]}
            alt="Pastor Dara and his wife Abiola"
            className="w-full h-auto object-contain transition-opacity duration-1000 ease-in-out"
            loading="lazy"
          />
        </div>
      </div>

      {/* Paragraph Section */}
      <div className="mt-8 px-4 md:px-12 lg:px-12 text-lg text-gray-800 leading-relaxed">
        <p className="mb-4">
          Pastor Dara is deeply committed to empowering people to achieve their
          dreams and fulfill their God-given destinies through the teaching of
          the living Word. His vision is to build a church without boundaries of
          race, culture, or color and to guide members toward their eternal home
          in heaven. Known for his relevant, simple, and humorous delivery of
          God’s Word, Pastor Dara brings the Gospel to life in a way that
          resonates with people from all walks of life. Compassionate and
          approachable, he has a passion for souls and is especially devoted to
          helping the less privileged. Pastor Dara is married to Abiola, his
          university campus fellowship friend, and together they are blessed
          with three wonderful children: Damilola, Damola, and Doyinsola.
        </p>
        <p className="mb-4">
          Pastor Mrs. Abiola Shofoluwe, fondly known as “Pastor Mrs.,” serves as
          the co-parish pastor of RCCG Chapel of His Glory, Bradford, working
          alongside her husband to ensure the fulfillment of his God-given
          assignment. She actively leads the Good Women Fellowship, children’s
          ministry, and Sanctuary Keepers, making significant contributions to
          the spiritual and operational aspects of the church.
        </p>
        <p className="mb-4">
          With a God-given passion to empower and encourage women and young
          people, Pastor Mrs. inspires others to excel and reach their fullest
          potential in every area of life. Known for her strong passion for prayer
          and intercession, she is a spiritual encourager who maintains lovely
          and friendly relationships within the church and beyond. Her hobbies,
          which reflect her heart for ministry, include prayer, telephone
          counseling, and evangelism.
        </p>
        <p>
          Together, Pastor Dara and Pastor Mrs. Abiola Shofoluwe exemplify a life
          of service, unity, and dedication to God’s work, leaving a lasting impact
          on the church and the community they serve. Their shared vision and
          partnership in ministry continue to inspire many to walk in their divine
          purpose and deepen their faith.
        </p>
      </div>
    </section>
  );
}
