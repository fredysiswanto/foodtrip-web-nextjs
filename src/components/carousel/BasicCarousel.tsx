'use client'
import { Card } from '@/components/card/Card'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '@/components/carousel/ArrowCarousel'
import { listDishes } from '@/data/dishes'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export const BasicCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)
  const dishs = listDishes.data
  return (
    <section className="embla bg-amber-300">
      <div
        className="embla__viewport"
        ref={emblaRef}
      >
        <div className="embla__container">
          {dishs.map((dish, index) => (
            <div
              className="embla__slide"
              key={index}
            >
              <div className="items-center justify-center">
                <Card
                  key={dish.dish_id}
                  title={dish.dish_name}
                  {...dish}
                >
                  {dish.dish_price}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="flex w-full justify-between gap-4">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </section>
  )
}
