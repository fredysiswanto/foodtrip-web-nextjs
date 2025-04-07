import { BasicCarousel } from '@/components/carousel/BasicCarousel'
import { TitleCarousel } from '@/components/carousel/TitleCarousel'

import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto' }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function HomePage() {
  return (
    <div className="relative">
      <TitleCarousel
        title={'Find your favorite Food'}
        fontSize={'font-2xl'}
      />

      <BasicCarousel
        slides={SLIDES}
        options={OPTIONS}
      />
    </div>
  )
}
