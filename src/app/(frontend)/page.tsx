import { Card } from '@/components/card/Card'

import EmblaCarousel from '@/components/carousel/Carousel'
import { listDishes } from '@/data/dishes'
import { restaurantList } from '@/data/resto-admin'
import { getRandomNumber } from '@/lib/helper'

import { EmblaOptionsType } from 'embla-carousel'

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
  }
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
    <div className="relative">
      <div className="my-10">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
        />
      </div>

      <div>
        <h2>Find your favorite Food</h2>
      </div>
      <div className="flex flex-col flex-wrap justify-center gap-5 sm:flex-row">
        {data.map((dish) => (
          <Card
            key={dish.dish_id}
            title={dish.dish_name}
            image={`/images/food/food (${getRandomNumber(31)}).jpg`}
            {...dish}
          >
            {dish.dish_price}
          </Card>
        ))}
      </div>
    </div>
  )
}
