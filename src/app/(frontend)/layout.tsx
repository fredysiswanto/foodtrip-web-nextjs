'use client'

import AppHeader from '@/layout/frontend/AppHeader'
import Backdrop from '@/layout/frontend/Backdrop'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen md:mx-20 xl:flex">
        <Backdrop />
        {/* Main Content Area */}
        <div className={`flex-1 transition-all duration-300 ease-in-out`}>
          {/* Header */}
          <AppHeader />
          {/* Page Content */}
          <div className="mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
