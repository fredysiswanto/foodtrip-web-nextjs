import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ComponentCardProps {
  title: string
  children: React.ReactNode
  className?: string
  desc?: string
}

export const Card: React.FC<ComponentCardProps> = ({ title, children }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white text-center shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <Link
        href="#"
        className="bg-amber-200"
      >
        <Image
          className="mx-auto rounded-t-lg object-cover"
          src={'/images/cards/card-01.jpg'}
          alt=""
          width={300}
          height={200}
        />
      </Link>
      <div className="border-t-2 p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {children}
        </p>
        <Button
          as="link"
          size="md"
          href="#"
        >
          Order Now
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}
