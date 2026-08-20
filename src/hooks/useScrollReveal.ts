import { useCallback, useRef } from 'react'

/** Fades/slides an element in the first time it scrolls into view. Returns a ref callback. */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  if (!observerRef.current && typeof IntersectionObserver !== 'undefined') {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observerRef.current?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )
  }

  return useCallback((el: HTMLElement | null) => {
    if (el) observerRef.current?.observe(el)
  }, [])
}
