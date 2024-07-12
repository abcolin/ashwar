import Image from 'next/image'
import clsx from 'clsx'

const products = [
  {
    id: 1,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    imageUrl: '/product.jpeg',
    quality: 1,
  },
  {
    id: 2,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    imageUrl: '/product.jpeg',
    quality: 2,
  },
  {
    id: 3,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    imageUrl: '/product.jpeg',
    quality: 3,
  },
  {
    id: 4,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    imageUrl: '/product.jpeg',
    quality: 0,
  },
  {
    id: 5,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    imageUrl: '/product.jpeg',
    quality: 1,
  },
  {
    id: 6,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    imageUrl: '/product.jpeg',
    quality: 2,
  },
  {
    id: 7,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    imageUrl: '/product.jpeg',
    quality: 3,
  },
  {
    id: 8,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    imageUrl: '/product.jpeg',
    quality: 4,
  },
]

export default function List() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="mt-8 pb-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
                <p className='border h-40 border-gray-300 rounded-xl bg-zinc-950 p-2 mt-4 text-white size-full'>{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
