import { Gradient } from '@/components/gradient'
import { cn } from '@/utils/cn'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

function Illustration({ className }: { className?: string }) {
  const scrollRevealOneRef = useRef<HTMLDivElement[]>([])
  const scrollRevealTwoRef = useRef<HTMLDivElement[]>([])

  const addToScrollRevealOneRef = (el) => {
    scrollRevealOneRef.current.push(el)
  }

  const addToScrollRevealTwoRef = (el) => {
    scrollRevealTwoRef.current.push(el)
  }

  useEffect(() => {
    if (scrollRevealOneRef.current.length > 0) {
      scrollRevealOneRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          delay: 1000,
          duration: 1400,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'bottom',
          interval: 200,
        }),
      )
    }

    if (scrollRevealTwoRef.current.length > 0) {
      scrollRevealTwoRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          delay: 400,
          duration: 600,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'right',
          interval: 150,
        }),
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  return (
    <>
      <div className={cn('hidden w-1/2 md:block', className)}>
        <Gradient className="absolute inset-0 md:hidden" />
        <div ref={addToScrollRevealTwoRef} className="absolute left-16 top-4 lg:-top-20 lg:left-24">
          <svg width="124" height="64" viewBox="0 0 124 64" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="0%" y1="50%" x2="114.418%" y2="50%" id="squares-1-a">
                <stop stopColor="#eaaa00" offset="0%" /> {/* Brand primary color */}
                <stop stopColor="#ffdd55" stopOpacity="0" offset="100%" /> {/* Lighter contrast */}
              </linearGradient>
            </defs>
            <path
              d="M0 0h4v4H0V0zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zM12 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM24 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM36 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM48 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM60 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM72 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM84 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM96 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
              fill="url(#squares-1-a)"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div
          ref={addToScrollRevealTwoRef}
          className="absolute hidden lg:-bottom-28 lg:left-40 lg:block"
        >
          <svg width="64" height="88" viewBox="0 0 64 88" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="0%" y1="50%" x2="114.418%" y2="50%" id="squares-2-a">
                <stop stopColor="#eaaa00" offset="0%" />
                <stop stopColor="#ffdd55" stopOpacity="0" offset="100%" />
              </linearGradient>
            </defs>
            <path
              d="M80 574h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm12-60h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
              transform="rotate(90 359 279)"
              fill="url(#squares-2-a)"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default Illustration
