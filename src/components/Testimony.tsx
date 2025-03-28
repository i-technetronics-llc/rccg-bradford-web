import React from 'react'
import Link from "next/link"

export default function Testimony() {
  return (
    <div>
      <section className="bg-gray-100 my-24 py-12 px-6">
  <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 items-center text-center md:text-left">
    
    {/* Share Your Testimony */}
    <div className="p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Share Your Testimony</h2>
      <p className="text-gray-600 mt-2">
        Has God done something amazing in your life? We'd love to hear your story!
        Share your testimony to encourage and bless others.
      </p>
     
      <Link href='/contact' target="_blank">
              <button className="bg-primary rounded-full mt-4 px-5 py-2 text-white font-semibold hover:bg-primary-dark transition">
               GIVE A TESTIMONY
              </button>
            </Link>
    </div>

    <div className="hidden md:block w-px bg-gray-300 h-full mx-auto"></div>

    {/* Join Our Ministry */}
    <div className="p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Join Our Team!</h2>
      <p className="text-gray-600 mt-2">
        We’re hiring a Minister of Religion to lead worship, provide pastoral care,
        and foster spiritual growth in our vibrant Pentecostal church in Bradford.
        Apply by <strong><em>25/04/2025!</em></strong> Kindly click the button to apply.
      </p>
    
      <Link href='https://g.co/kgs/Jba99Nz' target="_blank">
              <button className="bg-primary mt-4 rounded-full px-5 py-2 text-white font-semibold hover:bg-primary-dark transition">
              APPLY NOW
              </button>
            </Link>
     
    </div>

  </div>
</section>
    </div>
  )
}
