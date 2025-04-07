import { Card } from '@/components/card/Card'

import EmblaCarousel from '@/components/carousel/Carousel'
import { listDishes } from '@/data/dishes'
import { restaurantList } from '@/data/resto-admin'

import { EmblaOptionsType } from 'embla-carousel'

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 5

  let slides: any = []
  restaurantList.data.map((resto, index) => {
    index < SLIDE_COUNT
      ? slides.push({
          id: index,
          resto_img: resto.resto_img,
          resto_name: resto.resto_name,
        })
      : null
  })

  const SLIDES = slides
  const data = listDishes.data

  return (
    <div>
      <div className="my-10 md:px-5">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
        />
      </div>
      <div className="flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
        {data.map((dish) => (
          <Card
            key={dish.dish_id}
            title={dish.dish_name}
            {...dish}
          >
            {dish.dish_price}
          </Card>
        ))}
      </div>
    </div>
  )
}
