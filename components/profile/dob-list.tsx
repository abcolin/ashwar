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
    quality: 4,
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
            <div key={product.id} className="group relative">
              <div
                className={clsx(
                  'h-80 flex flex-col justify-between text-white border-solid border-[16px] rounded-2xl border-b-[32px] border-opacity-50 p-4 bg-black',
                  {
                    'border-purple-500': product.quality === 1,
                    'border-blue-500': product.quality === 2,
                    'border-green-500': product.quality === 3,
                    'border-gray-500': product.quality === 4,
                  }
                )}
              >
                <Image
                  width={20}
                  height={20}
                  className="w-full"
                  src={product.imageUrl}
                  alt="user"
                />
                <p>{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
