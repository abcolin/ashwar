import Image from 'next/image'
import { CopyIcon } from '@radix-ui/react-icons'

const stats = [
  { name: 'ChronicleNFT Mint', value: '29200' },
  { name: 'Last 24 hours Mint', value: '300+' },
  { name: 'ChronicleDOBs Mint', value: '40' },
]

export default function HeaderSections() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <Image
        src="/header-bg.jpeg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="mx-auto max-w-8xl pb-6 lg:px-8">
        <div className="w-full flex justify-between items-center px-16">
          <div className="flex gap-x-6 py-6 mb-2">
            <Image src="/contact/1.png" width={50} height={50} alt="facebook" />
            <Image src="/contact/2.png" width={50} height={50} alt="twitter" />
            <Image src="/contact/3.png" width={50} height={50} alt="youtube" />
            <Image src="/contact/4.png" width={50} height={50} alt="icon" />
            <Image src="/contact/5.png" width={50} height={50} alt="icon" />
          </div>
          <div className="flex text-white gap-x-4 items-center">
            <Image
              src="/square.png"
              width={33}
              height={33}
              alt="icon"
              className="w-auto"
            />
            <span className="flex-auto w-[600px]">
              ASH WAR chronicle contract: ckb1qrgqep8saj8ags1qrgqep8saj8ags
            </span>
            <CopyIcon className="size-6 cursor-pointer" />
          </div>
        </div>
        <div className="text-white">
          <p className="mb-3">
            The Dust Planet has gone through a 100 year long civil war, in which
            every 10 years marks an era. This is a rule that residents have
            agreed upon over the years, and it has not changed even during times
            of war. It was originally thought that everything would return to
            its original calm after the civil war ended, but it was unexpected
            that there would be a worse situation waiting for them, an
            unprecedented extraterrestrial colonization
          </p>
          <p className="mb-3">
            Every warrior on the dusty planet has their own story during this
            period, which has been broken down into four fragments: time,
            characters, location, and story framework. Let{"'"}s gather these
            four fragments and glimpse the little life of the warriors before
            fighting against alien invasion
          </p>
          <p>
            Note: Each fragment is a DOB, and the 4 matching fragments will be
            destroyed and converted into Chronicle DOB, which has whitelist
            permissions for the game
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <Image width={1073} height={177} src="/title.png" alt="title" />
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex flex-col-reverse gap-y-2 text-center"
              >
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-5xl leading-10 tracking-tight text-orange-300">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="text-center text-white py-12">
            <span className="inline-block w-[362px] h-[102px] bg-[url('/btn-bg.png')] mb-8 py-8 cursor-pointer opacity-70 hover:opacity-100">
              Mint Chronicle
              <br />
              Fragments
            </span>
            <p>
              <span className="text-3xl">1</span> Chronicle Fragment=
              <span className="text-3xl">4000</span>＄CKB
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
