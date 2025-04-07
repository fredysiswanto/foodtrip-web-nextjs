'use client'
import { TRestaurant } from '@/types/type'
import Image from 'next/image'

export type TSlides = Pick<TRestaurant, 'resto_img' | 'resto_name'>
export const ItemColousel = (props: TSlides) => {
  const { resto_img, resto_name } = props
  return (
    <div className="rounded-xl">
      <div>
        <Image
          src={resto_img}
          fill
          alt="unsplash"
          className="object-cover"
        ></Image>
      </div>
      <div className="bg-brand-500/30 shadow-theme-xs hover:bg-brand-600/50 disabled:bg-brand-300/50 absolute bottom-0 z-10 mt-10 w-full p-5">
        <h2 className="text-center text-3xl font-bold text-orange-500">
          {resto_name}
        </h2>
      </div>
    </div>
  )
}
