"use client"

import dynamic from 'next/dynamic'

const MouseFollower = dynamic(() => import('./MouseFollower'), {
  ssr: false,
})

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MouseFollower />
      {children}
    </>
  )
}
