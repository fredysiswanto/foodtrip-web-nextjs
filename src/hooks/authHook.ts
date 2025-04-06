'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * useAuth Hook
 * Mengembalikan session dan status login
 * Redirect otomatis ke /login jika autentikasi tidak valid
 */
export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  return { session, status }
}
