import { SiteHeader } from '@/components/site-header'
import React from 'react'

const LayoutAdmin = ({ children }: any) => {
  return (
    <>
      <SiteHeader />
      <div className="sm:container px-4 py-2 relative">{children}</div>
    </>
  )
}

export default LayoutAdmin
