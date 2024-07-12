import clsx from 'clsx'

const products = [
  {
    id: 1,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    quality: 1,
  },
  {
    id: 2,
    name: 'Basic Tee2',
    quality: 2,
  },
  {
    id: 3,
    name: 'Basic Tee3',
    quality: 3,
  },
  {
    id: 4,
    name: 'Basic Tee4',
    quality: 4,
  },
  {
    id: 5,
    name: 'Basic TeeBasic TeeBasic TeeBasic Tee',
    quality: 1,
  },
  {
    id: 6,
    name: 'Basic Tee2',
    quality: 2,
  },
  {
    id: 7,
    name: 'Basic Tee3',
    quality: 3,
  },
  {
    id: 8,
    name: 'Basic Tee4',
    quality: 4,
  },
]

export default function List() {
  return (
    <div className="w-full relative">
      <div className="absolute right-0 -top-16 z-10">
        <div className="flex space-x-4 text-orange-300 text-lg px-2">
          <a className="flex space-x-1 items-center px-4 py-1 border rounded-2xl border-orange-200">
            <span>Character</span>
          </a>
          <a className="flex space-x-1 items-center px-4 py-1">
            <span>Place</span>
          </a>
          <a className="flex space-x-1 items-center px-4 py-1">
            <span>Time</span>
          </a>
          <a className="flex space-x-1 items-center px-4 py-1">
            <span>Event</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="mt-8 pb-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div
                className={clsx(
                  'flex justify-between text-white border border-gray-400 rounded-2xl px-4 pt-6 pb-8 bg-gradient-to-b from-transparent',
                  {
                    'to-orange-500/50': product.quality === 0,
                    'to-purple-500/50': product.quality === 1,
                    'to-blue-500/50': product.quality === 2,
                    'to-green-500/50': product.quality === 3,
                    'to-gray-200/50': product.quality === 4,
                  }
                )}
              >
                <div className="w-full h-60 bg-zinc-950 rounded-xl p-4">
                  {product.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
