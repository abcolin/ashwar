import Image from 'next/image'
import { WalletIcon } from '@heroicons/react/24/outline'

function Mainnet() {
  return (
    <div className="flex justify-around items-center space-x-2 border border-white p-2 rounded-3xl bg-gradient-to-r from-gray-700 to-gray-900 hover:from-pink-500 hover:to-yellow-500 cursor-pointer">
      <Image src="/btc.png" width={40} height={40} alt="btc" />
      <span className="pr-6 text-2xl">BTC Mainnet</span>
    </div>
  )
}

function Wallnat() {
  return (
    <div className="flex justify-around items-center space-x-2 cursor-pointer">
      <WalletIcon className="size-8" />
      <span>Wallnat</span>
    </div>
  )
}

export default function UserPanel() {
  return (
    <div className="flex justify-around items-center text-white text-lg space-x-4">
      <Mainnet />
      <Wallnat />
    </div>
  )
}
