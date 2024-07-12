import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

const product = {
  id: 1,
  name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
  imageUrl: '/product.jpeg',
  quality: 1,
}

export default function ComposePanel() {
  return (
    <main className="px-4">
      <h4 className="text-xl text-center text-orange-300 py-4 font-semibold">You cloud get</h4>
      <div key={product.id} className="group relative ">
        <div
          className={clsx(
            'flex flex-col justify-between border border-gray-400 rounded-2xl px-4 pt-6 pb-8 bg-gradient-to-b from-transparent',
            {
              'to-orange-500/50': product.quality === 0,
              'to-purple-500/50': product.quality === 1,
              'to-blue-500/50': product.quality === 2,
              'to-green-500/50': product.quality === 3,
              'to-gray-200/50': product.quality === 4,
            }
          )}
        >
          <Image
            width={20}
            height={20}
            className="w-full rounded-xl"
            src={product.imageUrl}
            alt="user"
          />
          <p className="border h-40 border-gray-300 rounded-xl bg-zinc-950 p-2 mt-4 text-white size-full">
            {product.name}
          </p>

        
        </div>
        <div className="text-center text-white py-12">
          <Link
            href="/profile/compose"
            className="inline-block text-4xl w-[362px] h-[102px] bg-[url('/btn-bg.png')] mb-8 py-8 cursor-pointer opacity-70 hover:opacity-100"
          >
            Mint
          </Link>
        </div>
      </div>
    </main>
  )
}
