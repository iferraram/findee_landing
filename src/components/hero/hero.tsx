import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'
import icon from '/assets/findee.png'

function Hero({
  className,
  content,
  illustration,
  title,
  scroll,
}: {
  className?: string
  content: string
  illustration?: ReactNode
  title: string
  scroll: any
}) {
  return (
    <section className={cn('text-center lg:ml-10 lg:w-6/12 lg:py-20 lg:text-left', className)}>
      <div className="hero mx-auto w-auto max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div className="hero-copy pb-16 pt-10 lg:min-w-[40rem] lg:pr-20 lg:pt-16">
            <div className="mx-auto w-full max-w-3xl">
              <div className="mb-4 flex flex-row items-center">
                <img alt="icon" height={'auto'} src={icon} width={60} className="mr-2" />
                <h1 className="mt-0 text-4xl font-bold md:text-5xl">{title}</h1>
              </div>
              <p className="prose prose-xl m-auto mb-4 text-gray-500">{content}</p>
            </div>

            <div>
              <div className="control">
                <button
                  onClick={scroll}
                  className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg"
                  type="submit"
                >
                  Get early access
                </button>
              </div>
            </div>
          </div>
          {!!illustration && (
            <div className="relative -mx-6 py-10 lg:mx-0 lg:p-0">{illustration}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
