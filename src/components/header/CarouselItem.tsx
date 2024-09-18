export default function CarouselItem({ scroll, icon, title, text }) {
  return (
    <div className="h-screen">
      <div className="h-screen bg-white">
        <div className="align-center flex h-full flex-col lg:flex-row lg:justify-center dark:text-white">
          <div className="flex flex-col px-3 lg:justify-center lg:px-10">
            <img src={icon} alt="Findee" className="m-auto w-4/6 md:w-2/6 lg:hidden" />
          </div>
          <div className="bg-brand flex h-56 w-screen flex-col justify-center p-3 shadow-lg lg:h-full lg:w-1/2 lg:flex-row lg:flex-col lg:bg-white lg:shadow-none">
            <h2 className="mt-2 text-center text-lg font-bold lg:text-left lg:text-3xl">{title}</h2>
            <h4 className="text-center text-lg lg:text-left lg:text-xl">{text}</h4>
            <button
              onClick={scroll}
              className="mx-auto mt-3 inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg md:w-56 lg:mx-0 lg:shadow-none"
              type="submit"
            >
              Get early access
            </button>
          </div>
          <img src={icon} alt="Findee" className="hidden h-auto lg:block lg:w-auto" />
        </div>
      </div>
    </div>
  )
}
