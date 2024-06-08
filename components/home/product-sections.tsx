/* eslint-disable react/no-unescaped-entities */
import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const includedFeatures = [
  '"CHAR ACTE R"',
  '"PLA CE"',
  '"TIME"',
  '"EVENT"',
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple no-tricks mint
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We use vrgda's economic model to control the threat of bubbles. if
            the market demand for Chronicle DOB exceeds expectations, mint costs
            will rise. If demand falls short, costs fall. When demand is in line
            with expectations, costs remain unchanged. This can skillfully
            achieve the balance between supply and demand of assets in the game.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
              <div className="w-full">
                <Image
                  width={432}
                  height={432}
                  src="/product.jpeg"
                  alt="product"
                />
              </div>
            </div>
          </div>
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Lifetime membership
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Spore DOB protocol is an NFT asset generation protocol based on
              DNA principle, which generates "Loot Adventure" like fields
              through random number seeds. We set up a maximum "Field Pool" for
              each field of NFT, and then retrieve the field on the fixed offset
              through "DNA" for display, while for pure numerical fields, it is
              retrieved within a fixed range of values. We have designed an
              unprecedented white list acquisition mechanism. ASH WAR Chronicle,
              a chronicle game based on the subversive DOB fragment synthesis
              play method, can enable players to obtain the white list
              qualification of the game while understanding the background story
              of the game. The mechanism of white list synthesis of assets in
              the chain prevents insider trading in the white list.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
