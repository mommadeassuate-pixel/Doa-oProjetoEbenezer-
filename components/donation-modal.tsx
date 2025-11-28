"use client"

import { X } from "lucide-react"

interface DonationModalProps {
  onClose: () => void
}

export default function DonationModal({ onClose }: DonationModalProps) {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        {/* Modal */}
        <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition">
            <X className="w-6 h-6" />
          </button>

          {/* Heart Icon */}
          <div className="text-center mb-6">
            <div className="inline-block">
              <svg fill="#FF3E3E" className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24,6v10.101c0,2.137-.832,4.146-2.343,5.657l-1.95,1.95c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l1.95-1.95c1.133-1.133,1.757-2.64,1.757-4.243V6c0-.551-.449-1-1-1s-1,.449-1,1v8.067c-.015.662-.239,1.32-.688,1.856l-2.578,2.684c-.196.205-.458.307-.721.307-.25,0-.499-.093-.693-.279-.398-.383-.411-1.016-.028-1.414l2.533-2.634c.13-.157.191-.368.188-.585v-.002v-.044c-.013-.221-.095-.446-.254-.624-.367-.409-.998-.444-1.406-.077l-3.163,2.911c.53,1.001.824,2.124.824,3.276v3.559c0,.552-.448,1-1,1s-1-.448-1-1v-3.559c0-1.395-.588-2.735-1.615-3.68l-2.734-2.516c-.398-.357-1.03-.324-1.397.086-.328.367-.337.928-.021,1.305l2.57,2.671c.383.398.371,1.031-.028,1.414-.396.383-1.031.372-1.414-.028l-2.616-2.721c-.46-.547-.693-1.2-.723-1.854-.005-.04-.024-8.118-.024-8.118,0-.551-.449-1-1-1s-1,.449-1,1v10.101c0,1.603.624,3.109,1.757,4.243l1.95,1.95c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.95-1.95c-1.511-1.511-2.343-3.52-2.343-5.657V6c0-1.654,1.346-3,3-3s3,1.346,3,3v5.186c.999-.352,2.152-.176,2.996.579l2.744,2.525c.087.08.164.168.247.252l3.008-2.768c.851-.762,2.006-.939,3.005-.587v-5.186c0-1.654,1.346-3,3-3s3,1.346,3,3Z" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <p className="text-center mb-4 font-poppins">
            Por apenas <span className="font-bold">R$25 a mais</span>, você pode ajudar significamente o projeto!
          </p>

          <p className="text-center text-gray-600 mb-6 text-sm">Considere doar R$50 e fazer ainda mais diferença.</p>

          {/* Buttons */}
          <div className="space-y-3">
            <a
              href="https://go.plataformafortpay.com.br/zayw1"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg text-center hover:bg-green-600 transition"
            >
              SIM, QUERO DOAR R$50
            </a>
            <button
              onClick={onClose}
              className="w-full text-green-600 font-semibold py-2 hover:text-green-700 transition underline"
            >
              Quero continuar doando R$25
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
