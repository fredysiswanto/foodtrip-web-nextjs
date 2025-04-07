import { twMerge } from 'tailwind-merge'

export const TitleCarousel = ({ title, fontSize }: any) => {
  const gradient = {
    colorFrom: 'blue-600',
    colorVia: 'orange-500',
    colorTo: 'indigo-400',
  }
  return (
    <div className="">
      <div
        className={twMerge(
          'mt-10 mb-5 ml-0 rounded-r-3xl bg-white/40 text-5xl font-bold',
          fontSize,
        )}
      >
        <h2
          className={`inline-block bg-gradient-to-r from-${gradient.colorFrom} via-${gradient.colorVia} to-${gradient.colorTo} bg-clip-text text-transparent`}
        >
          {title}
        </h2>
      </div>
    </div>
  )
}
