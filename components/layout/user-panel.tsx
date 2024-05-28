import Image from 'next/image'
import { WalletIcon } from '@heroicons/react/24/outline'

function Mainnet() {
  return (
    <div className="flex justify-around items-center space-x-2">
      <Image src="/btc.png" width={40} height={40} alt="btc" />
      <span>Mainnet</span>
    </div>
  )
}

function Wallnat() {
  return (
    <div className="flex justify-around items-center space-x-2">
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
