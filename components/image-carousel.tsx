"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/images/momade-201.jpg",
  "/images/momade-202.jpg",
  "/images/momade-203.jpg",
  "/images/momade-204.jpg",
  "/images/momade-extra-1.jpg",
  "/images/momade-extra-2.png",
  "/images/momade-extra-3.jpg",
  "/images/momade-extra-4.jpg",
]

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative mb-8 rounded-lg overflow-hidden bg-gray-100">
      {/* Main Image */}
      <div className="relative w-full h-80">
        <img src={images[currentSlide] || "/placeholder.svg"} alt="Campaign" className="w-full h-full object-cover" />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentSlide ? "bg-blue-600 scale-125" : "bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 p-3 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-16 h-12 rounded border-2 transition overflow-hidden ${
              index === currentSlide ? "border-blue-600" : "border-gray-300 opacity-70 hover:opacity-100"
            }`}
          >
            <img src={image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
