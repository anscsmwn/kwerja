'use client'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const LinkLogin = () => {
  const pathname = usePathname()
  if (pathname === '/auth/login') return null
  return (
    <Link
      href="/auth/login"
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute right-4 top-4 md:right-8 md:top-8',
      )}
    >
      Login
    </Link>
  )
}

export default LinkLogin
