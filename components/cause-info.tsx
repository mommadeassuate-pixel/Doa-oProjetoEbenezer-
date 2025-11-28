"use client"

import { Heart, Users, Target } from "lucide-react"

interface CauseInfoProps {
  totalDonated: number
}

export default function CauseInfo({ totalDonated }: CauseInfoProps) {
  const goal = 2000
  const progress = (totalDonated / goal) * 100
  const donorsCount = 47

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <div className="mb-8">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        AJUDE A LEVAR UM PRATO DE COMIDA PARA QUEM MAIS PRECISA
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
        Todos os dias, centenas de crianças órfãs e famílias em extrema vulnerabilidade enfrentam a fome como parte da
        rotina. Algumas passam o dia inteiro esperando por uma única refeição… e muitas vezes, essa refeição não vem.
        Nós queremos mudar isso... Com a sua ajuda, queremos preparar um almoço por semana para essas crianças e
        famílias que lutam para sobreviver. Pode parecer pouco para quem tem tudo, mas para elas, um prato de comida
        significa esperança, força e vida. As imagens acima mostram a realidade dura, mas também mostram algo maior: a
        vontade de viver e o sorriso que nasce quando alguém estende a mão.
      </p>

      {/* About Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Sobre</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Hoje quero abrir meu coração para falar de uma realidade que muitos veem de longe, mas poucos conhecem de
          verdade. A imagem acima não é apenas uma foto. É um retrato vivo de luta, de resistência e, acima de tudo, de
          esperança.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Ali vemos crianças, mães e famílias inteiras reunidas, não por festa, mas pela necessidade diária de algo que
          deveria ser básico para todos: um prato de comida. Entre olhares cansados e sorrisos tímidos, existe uma força
          silenciosa — a força de quem enfrenta a fome, mas não perde a fé.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Cada criança nessa imagem carrega um universo dentro de si. Carrega sonhos, carrega medo, carrega inocência. E
          cada mãe ali sentada traz nos olhos a preocupação de quem luta todos os dias pelo mínimo, de quem enfrenta a
          dor de ver seus filhos dependerem de ajuda para comer.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          A fome não é apenas a falta de alimento. É a ausência de dignidade, de segurança, de paz. É uma batalha que
          atinge o corpo, mas também o espírito. E mesmo assim, essas famílias seguem firmes, esperançosas, esperando
          por um gesto, por uma mão estendida, por alguém disposto a enxergar além da imagem.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3 mt-6">
          Se você está lendo isso, talvez Deus esteja tocando o seu coração.
        </h3>

        <p className="text-gray-700 leading-relaxed mb-4">
          Talvez Ele esteja te mostrando que a esperança nasce quando alguém decide agir. Não estamos pedindo muito —
          estamos pedindo vida, cuidado, humanidade.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Sua doação, seja qual for o valor, pode ser a refeição de uma criança. Pode ser o alívio de uma mãe. Pode ser
          a diferença entre um dia de fome… e um dia de esperança.
        </p>

        <p className="text-gray-700 leading-relaxed">
          E se você não puder doar, já estará ajudando ao compartilhar, ao orar, ao ser voz para quem não é ouvido. Às
          vezes, a maior transformação começa com um simples gesto de amor.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-gray-600 font-medium">Arrecadado</p>
            <p className="text-2xl font-bold text-green-600">{formatCurrency(totalDonated)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600 font-medium">Meta</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(goal)}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-green-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Progress Text */}
        <p className="text-sm text-gray-600 mt-3">
          <span className="font-semibold text-gray-900">{Math.round(progress)}%</span> da meta atingida com{" "}
          <span className="font-semibold text-gray-900">{donorsCount}</span> doadores
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <Heart className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{donorsCount}</p>
          <p className="text-xs text-gray-600">Doadores</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">{Math.round(progress)}%</p>
          <p className="text-xs text-gray-600">Meta</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">3</p>
          <p className="text-xs text-gray-600">Dias restantes</p>
        </div>
      </div>

      {/* YouTube Video Player */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Veja o Impacto</h2>
        <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/4_o29Yf8iao"
            title="Campanha Vakinha"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
