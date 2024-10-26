import FaqsPage from './faqs'
import { useRef } from 'react'
import { Carousel } from 'flowbite-react'
import list from '/assets/list.gif'
import review from '/assets/feed.gif'
import wish from '/assets/wish.gif'
import icon from '/assets/findee.png'
import CarouselItem from '@/components/header/CarouselItem'
import { Footer } from '@/components/footer'

export default function HomePage() {
  const scrollRevealRef = useRef<HTMLDivElement | null>(null)

  const addToScrollRevealRef = () => {
    if (scrollRevealRef.current) {
      scrollRevealRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const content = [
    {
      icon: wish,
      title: 'Guarda los lugares que quieres visitar',
      text: 'No te quedes sin planes. Lleva un registro de los lugares que has visitado y guarda los que deseas visitar en el futuro.',
    },
    {
      icon: list,
      title: 'Crea y comparte listas',
      text: 'Te ayudaremos a planear el itinerario perfecto, haciendo que sea fácil organizar cada paso de tu viaje.',
    },
    {
      icon: review,
      title: 'Descubre rincones escondidos',
      text: 'Te recomendaremos lugares adaptados a tus gustos, con sugerencias personalizadas basadas en tus preferencias y experiencias pasadas.',
    },
  ]

  return (
    <div className="">
      <div className="bg-white">
        <div className="flex w-screen items-center justify-center pt-5 lg:hidden lg:flex-col">
          <img alt="icon" height={'auto'} src={icon} className="w-10 p-2 md:m-0 md:w-14" />
          <h1 className="text-xl font-bold md:text-4xl">Findee</h1>
        </div>
        <Carousel
          slide={false}
          leftControl={
            <span className="carousel-control-prev">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400 hover:bg-yellow-600">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </span>
          }
          rightControl={
            <span className="carousel-control-next">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-secondary-500 to-secondary-400 hover:bg-yellow-600">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </span>
          }
        >
          {content.map((slide) => (
            <CarouselItem
              text={slide.text}
              title={slide.title}
              icon={slide.icon}
              scroll={addToScrollRevealRef}
            />
          ))}
        </Carousel>
      </div>

      {/* <SupportPage scrollRef={scrollRevealRef} /> */}
      <FaqsPage />
      <Footer />
    </div>
  )
}
