"use client"

export default function DonationCTA({ onUpsellClick }: { onUpsellClick: () => void }) {
  const donationOptions = [
    { value: 25, label: "R$ 25,00", href: "https://go.plataformafortpay.com.br/hbirwzmeyc", featured: false },
    { value: 50, label: "R$ 50,00", href: "https://go.plataformafortpay.com.br/zayw1", featured: false },
    { value: 75, label: "R$ 75,00", href: "https://go.plataformafortpay.com.br/pdku7", featured: false },
    { value: 100, label: "R$ 100,00", href: "https://go.plataformafortpay.com.br/0bbvp", featured: true },
    { value: 150, label: "R$ 150,00", href: "https://go.plataformafortpay.com.br/kin0t", featured: false },
    { value: 250, label: "R$ 250,00", href: "https://go.plataformafortpay.com.br/nr8pr", featured: false },
    { value: 500, label: "R$ 500,00", href: "https://go.plataformafortpay.com.br/f8qii", featured: false },
    { value: 1000, label: "R$ 1.000,00", href: "https://go.plataformafortpay.com.br/tbrrp", featured: false },
  ]

  return (
    <div className="space-y-4 mb-8">
      {/* Help message */}
      <p className="text-center text-gray-700 font-semibold mb-6">
        Ajude a levar um prato de comida para quem mais precisa
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {donationOptions.map((option) => (
          <div key={option.value} className="relative">
            {option.featured && (
              <div className="absolute -top-3 right-0 bg-pink-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                Mais escolhido
              </div>
            )}
            <a
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full font-bold py-3 px-3 rounded-lg text-center transition ${
                option.featured
                  ? "bg-green-500 hover:bg-green-600 text-white text-base"
                  : "bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base"
              }`}
            >
              {option.label}
            </a>
          </div>
        ))}
      </div>

      {/* Secondary CTA */}
      <button
        onClick={onUpsellClick}
        className="w-full bg-blue-50 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition border border-blue-200 mt-6"
      >
        Estenda a mão, porque a fé se revela em atos de amor.
      </button>

      {/* Info Message */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Sua doação é segura e fácil. Você receberá um comprovante por e-mail.
      </p>
    </div>
  )
}
