import type { PropsWithChildren } from 'react'

import { Gradient } from '@/components/gradient'
import { cn } from '@/utils/cn'

function Layout({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <div
      className={cn(
        'relative mx-auto my-0 flex max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl md:min-h-screen',
        className,
      )}
    >
      <Gradient className="absolute bottom-0 left-1/2 top-0 ml-28 hidden w-1/2 md:block" />

      <main className="flex-shrink-0 flex-grow items-center lg:flex">{children}</main>
    </div>
  )
}

export default Layout
