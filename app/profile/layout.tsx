import NavPanel from '@/components/profile/nav-panel'
import UserPanel from '@/components/profile/user-panel'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col px-12 pt-8 bg-[url('/profile-bg.jpg')] bg-center	bg-origin-border bg-cover">
      <NavPanel />
      <div className='relative px-12 -top-14'>
        <div className="flex flex-col pt-14 md:flex-row md:overflow-hidden bg-gradient-to-b	from-transparent to-zinc-950 shadow-2xl shadow-zinc-950">
          {children}
        </div>
      </div>
    </div>
  )
}
