'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './DotButtonCarousel'
import { PrevButton, NextButton, usePrevNextButtons } from './ArrowCarousel'
import styles from './carousel.module.css'

import { TRestaurant } from '@/types/type'
import { ItemColousel } from '@/components/carousel/ItemColousel'

export type TSlides = Pick<TRestaurant, 'resto_img' | 'resto_name'>
type PropType = {
  slides: TSlides[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className={styles.embla}>
      <div
        className={styles.embla__viewport}
        ref={emblaRef}
      >
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div
              className={styles.embla__slide}
              key={index}
            >
              <div>
                <ItemColousel
                  resto_img={`/images/resto/resto (${index + 1}).jpg`}
                  resto_name={slide.resto_name}
                />
              </div>
              <div className={styles.embla__slide__number}>
                {slide.resto_name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles.embla__dot}`.concat(
                index === selectedIndex ? `${styles.embla__dot}--selected` : '',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
