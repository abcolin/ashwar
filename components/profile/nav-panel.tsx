'use client'

import Link from 'next/link'

export default function UserPanel() {
  return (
    <div className="flex justify-between relative z-30">
      <div className="flex space-x-4 border rounded-md border-orange-200 text-orange-200 text-xl py-1 px-8 font-semibold">
        <Link
          href="/profile/nft"
          className="flex space-x-1 items-center px-6 py-2"
        >
          <span>Chronicle NFT</span>
        </Link>
        <Link
          href="/profile/dob"
          className="flex space-x-1 items-center px-6 py-2"
        >
          <span>ChronicleDOB</span>
        </Link>
      </div>
    </div>
  )
}
