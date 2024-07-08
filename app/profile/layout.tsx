import NavPanel from '@/components/profile/nav-panel'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col px-12 pt-8 bg-[url('/profile-bg.jpg')] bg-center	bg-origin-border bg-cover">
      <NavPanel />
      <div className='relative px-12 -top-14'>
        <div className="pt-14 bg-gradient-to-b from-transparent to-zinc-950 shadow-2xl shadow-zinc-950">
          {children}
        </div>
      </div>
    </div>
  )
}
