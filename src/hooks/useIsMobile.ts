import { useEffect, useState } from 'react'

/** Tracks whether the viewport is at or below the site's single mobile breakpoint (1024px). */
export function useIsMobile() {
  const query = '(max-width: 1024px)'
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setIsMobile(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
