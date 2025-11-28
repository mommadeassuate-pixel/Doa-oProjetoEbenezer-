import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Legal Notice */}
      <div className="bg-gray-100 px-4 py-6 text-center">
        <p className="text-sm text-gray-600 max-w-4xl mx-auto">
          AVISO LEGAL: O texto e as imagens incluídos nessa página são de única e exclusiva responsabilidade do criador
          da vaquinha e não representam a opinião ou endosso da plataforma Vakinha.
        </p>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header with Logo and Social Icons */}
          <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <Image
                src="/images/vakinha-logo.png"
                alt="Vakinha Logo"
                width={40}
                height={40}
                className="w-auto h-auto"
              />
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-green-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-green-500 mb-6">Links rápidos</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Quem somos
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Vaquinhas
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Criar vaquinhas
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Login
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Vaquinhas mais amadas
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block">
                    Política de privacidade
                  </Link>
                </div>
                <div>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Termos de uso
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Dúvidas frequentes
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Taxas e prazos
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Loja de corações
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-4">
                    Vakinha Premiada
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block">
                    Blog do Vakinha
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-bold text-green-500 mb-6">Fale conosco</h3>
              <Link href="#" className="text-gray-300 hover:text-green-500 transition-colors block mb-8">
                Clique aqui para falar conosco
              </Link>
              <div className="mb-8">
                <p className="text-gray-300">De Segunda à Sexta</p>
                <p className="text-gray-300">Das 9:30 às 17:00</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Shield size={24} className="text-white" />
                </div>
                <span className="text-green-500 font-bold text-sm">
                  SELO DE
                  <br />
                  SEGURANÇA
                </span>
              </div>
            </div>

            {/* Download App */}
            <div>
              <h3 className="text-xl font-bold text-green-500 mb-6">Baixe nosso App</h3>
              <div className="flex flex-col gap-4">
                <a href="#" className="inline-block">
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Disponível no Google Play"
                    width={180}
                    height={60}
                    className="w-auto h-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="#" className="inline-block">
                  <Image
                    src="/images/app-store-badge.png"
                    alt="Baixar na App Store"
                    width={150}
                    height={50}
                    className="w-auto h-auto hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <p className="text-gray-400 text-sm text-center">© 2025 Vakinha. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
