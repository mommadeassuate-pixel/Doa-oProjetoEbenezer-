"use client"

import { useState } from "react"
import DonationModal from "@/components/donation-modal"
import ImageCarousel from "@/components/image-carousel"
import Header from "@/components/header"
import CauseInfo from "@/components/cause-info"
import DonationCTA from "@/components/donation-cta"
import Footer from "@/components/footer"

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const totalDonated = 300

  return (
    <div className="w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
      <Header />

      <main className="w-full max-w-full sm:max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex-1">
        {/* Image Carousel */}
        <ImageCarousel />

        {/* Cause Information */}
        <CauseInfo totalDonated={totalDonated} />

        {/* Donation CTA */}
        <DonationCTA onUpsellClick={() => setShowModal(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Donation Modal */}
      {showModal && <DonationModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
