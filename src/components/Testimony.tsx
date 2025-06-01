import React from 'react'
import Link from "next/link"

export default function Testimony() {
  return (
    <div>
      <section className="max-w-7xl mx-auto my-24 py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-12 items-center">
          
          {/* Share Your Testimony */}
          <div className="p-8">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-primary">
                Share Your Testimony
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Has God done something amazing in your life? We'd love to hear your story!
                Share your testimony to encourage and bless others.
              </p>
              <Link href='/contact' className="inline-block">
                <button className="bg-primary text-white rounded-full mt-6 px-8 py-3 font-semibold">
                  GIVE A TESTIMONY
                </button>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-300 h-48 mx-auto"></div>

          {/* Prayer Request Section */}
          <div className="p-8">
            <div className="text-center md:text-left space-y-4">
              <h2 className="text-3xl font-bold text-primary">
                Need Prayer?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of prayer. Submit your prayer requests and let us stand with you in faith.
              </p>
              <Link href='/contact' className="inline-block">
                <button className="bg-primary text-white rounded-full mt-6 px-8 py-3 font-semibold">
                  SUBMIT PRAYER REQUEST
                </button>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}
