'use client'

import NavPanel from '@/components/profile/nav-panel'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const showNav = pathname !== '/profile/compose'

  return (
    <div className="min-h-full flex flex-col px-12 pt-8 bg-[url('/profile-bg.jpg')] bg-center	bg-origin-border bg-cover">
      {showNav && <NavPanel />}
      <div
        className={clsx('relative px-12', {
          '-top-14': showNav,
        })}
      >
        <div
          className={clsx(
            'bg-gradient-to-b from-transparent to-zinc-950 shadow-2xl shadow-zinc-950',
            {
              'pt-14': showNav,
            }
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
