import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TDish } from '@/types/type'
import { EyeIcon } from '@/icons'
type ComponentCardProps = {
  title: string
  children: React.ReactNode
  className?: string
  desc?: string
  width?: string
  height?: string
  image?: string
  imageAlt?: string
} & TDish

function getRandomNumber(): number {
  return Math.floor(Math.random() * 31) + 1
}

export const Card: React.FC<ComponentCardProps> = ({
  title,
  children,
  width = '300px',
  height = '400px',
  ...dish
}) => {
  return (
    <div
      className={`w-full rounded-lg border border-gray-200 bg-white text-center shadow-sm hover:bg-gray-100 md:w-1/3 lg:w-[23%] dark:border-gray-700 dark:bg-gray-800`}
    >
      <div className="flex flex-col items-center justify-between">
        <div className="relative h-[200px] w-full">
          <Link href="#">
            <Image
              className="mx-auto rounded-t-lg object-cover"
              src={`/images/food/food (${getRandomNumber()}).jpg`}
              alt=""
              fill={true}
              loading="lazy"
            />
          </Link>
          <span className="absolute top-2 right-2 rounded-xl bg-amber-400 px-2 py-1 text-xs font-medium text-gray-900 dark:bg-amber-500 dark:text-gray-800">
            {dish.dish_category.dishcatg_name}
          </span>
        </div>
        <div className="w-full border-t-2 p-5">
          <Link href="#">
            <h5 className="mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <div className="w-full text-left">
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              Resto : {dish.restaurant.resto_name}
            </p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              Phone : {dish.restaurant.resto_phone}
            </p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              Price : {children}
            </p>
          </div>
          <div className="flex justify-between gap-3">
            <Button
              variant="outline"
              as="link"
              size="md"
              href="#"
              className="mt-3"
            >
              View Details
            </Button>
            <Button
              as="link"
              size="md"
              href="#"
              className="mt-3"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
