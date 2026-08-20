import { Phone } from 'lucide-react'
import { phone } from '../i18n/content'

export function FloatingCallButton() {
  return (
    <a href={`tel:${phone}`} className="floating-call" aria-label="Позвонить">
      <Phone size={20} strokeWidth={1.75} color="#fff" aria-hidden="true" />
    </a>
  )
}
