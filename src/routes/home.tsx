import FaqsPage from './faqs'
import SupportPage from './support'
import { useRef } from 'react'
import { Carousel } from 'flowbite-react'
import list from '/assets/list.gif'
import review from '/assets/feed.gif'
import wish from '/assets/wish.gif'

import icon from '/assets/findee.png'
import CarouselItem from '@/components/header/CarouselItem'

export default function HomePage() {
  const scrollRevealRef = useRef<HTMLDivElement | null>(null)

  const addToScrollRevealRef = () => {
    if (scrollRevealRef.current) {
      scrollRevealRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const content = [
    {
      icon: review,
      title: 'Discover Hidden Gems',
      text: "We'll recommend places tailored to your tastes, with personalized suggestions based on your preferences and past experiences.",
    },
    {
      icon: list,
      title: 'Create and Share Lists',
      text: "We'll guide you in planning the perfect itinerary, making it easy to organize every step of your journey",
    },
    {
      icon: wish,
      title: 'Check-In & Save Locations',
      text: "You'll always know what to do next. Keep track of places you've been and save spots you want to explore in the future",
    },
  ]
  return (
    <div className="h-screen">
      <div className="h-screen bg-white">
        <div className="flex w-screen items-center justify-center pt-5 lg:hidden lg:flex-col">
          <img alt="icon" height={'auto'} src={icon} className="w-10 p-2 md:m-0 md:w-14" />
          <h1 className="text-xl font-bold md:text-4xl">Findee</h1>
        </div>
        <Carousel
          slide={false}
          leftControl={
            <span className="carousel-control-prev">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-yellow-600"
                style={{ backgroundColor: '#ffbc57' }}
              >
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
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-yellow-600"
                style={{ backgroundColor: '#ffbc57' }}
              >
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
      <SupportPage scrollRef={scrollRevealRef} />
      <FaqsPage />
    </div>
  )
}
