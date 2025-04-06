'use client'

import { useSidebar } from '@/context/SidebarContext'
import { useAuth } from '@/hooks/authHook'
import AppHeader from '@/layout/admin/AppHeader'
import AppSidebar from '@/layout/admin/AppSidebar'
import Backdrop from '@/layout/admin/Backdrop'

import React from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { session, status } = useAuth()
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()
  if (status === 'loading') return <p>Loading...</p>

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? 'ml-0'
    : isExpanded || isHovered
      ? 'lg:ml-[290px]'
      : 'lg:ml-[90px]'

  return (
    <>
      {session && (
        <div className="min-h-screen xl:flex">
          {/* Sidebar and Backdrop */}

          <AppSidebar />
          <Backdrop />
          {/* Main Content Area */}
          <div
            className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
          >
            {/* Header */}
            <AppHeader />
            {/* Page Content */}
            <div className="mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
