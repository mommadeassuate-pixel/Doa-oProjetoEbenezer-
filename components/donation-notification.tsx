"use client"

interface DonationNotificationProps {
  notification: {
    id: number
    name: string
    amount: string
    photo: string
  }
}

export default function DonationNotification({ notification }: DonationNotificationProps) {
  return (
    <div className="animate-slide-in flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200 max-w-xs">
      {/* Avatar */}
      <img
        src={notification.photo || "/placeholder.svg"}
        alt={notification.name}
        className="w-9 h-9 rounded-full flex-shrink-0"
      />

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-teal-600">{notification.name}</p>
        <p className="text-xs text-gray-600 truncate">Acabou de doar {notification.amount}.</p>
      </div>
    </div>
  )
}
