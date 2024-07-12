import NftList from '@/components/profile/nft-list'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex flex-col md:flex-row">
      <div className="w-full flex-none md:w-[400px] text-white text-lg">
        <div className="*:mb-4 p-12">
          <p>
            Chronicle Fragments have 4 classifications contain Character, Place,
            Time and Event.
          </p>
          <p>Character is the player you are playing with in the game. </p>
          <p>Place is where your story happened. </p>
          <p>Time describes when your player acting at the place. </p>
          <p>Event contains your unique story in the game.</p>
        </div>
        <div className="text-center text-white py-12">
          <Link
            href="/profile/compose"
            className="inline-block text-2xl w-[362px] h-[102px] bg-[url('/btn-bg.png')] mb-8 py-6 cursor-pointer opacity-70 hover:opacity-100">
            Mint Chronicle
            <br />
            Fragments
          </Link>
          <p>
            <span className="text-3xl">1</span> Chronicle Fragment=
            <span className="text-3xl">4000</span>＄CKB
          </p>
        </div>
      </div>
      <div className="flex-grow">
        <NftList />
      </div>
    </main>
  )
}
