import DobList from '@/components/profile/dob-list'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-[400px] text-white text-lg">
        <div className="p-12">
          <p className="mb-4">
            Chornicle VIP DOB gives the eligibility for owners to participate in
            our next rogue-like fully on-chain game, which will be the ever
            first game in Bitcoin ecosystem that offers PVE, PVP and UGC mode.
          </p>
          <p>VIPs have rights:</p>
          <ul className="list-decimal list-inside">
            <li>gain airdropped tokens</li>
            <li>give discount in playing game</li>
            <li>many other rights</li>
          </ul>
        </div>
        <div className="text-center text-white py-12">
          <Link
            href="/profile/compose"
            className="inline-block text-2xl w-[362px] h-[102px] bg-[url('/btn-bg.png')] mb-8 py-6 cursor-pointer opacity-70 hover:opacity-100"
          >
            Compose VIP
            <br />
            DOB
          </Link>
        </div>
      </div>
      <div className="flex-grow md:overflow-y-auto">
        <DobList />
      </div>
    </main>
  )
}
