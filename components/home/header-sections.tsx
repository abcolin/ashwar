import Image from 'next/image'

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function HeaderSections() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 pb-24">
      <Image
        src="/header-bg.jpeg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="mx-auto max-w-7xl pb-6 lg:px-8">
        <div className="w-full flex">
          <div className="flex gap-x-6 py-6 mb-2">
            <Image src="/contact/1.png" width={50} height={50} alt="facebook" />
            <Image src="/contact/2.png" width={50} height={50} alt="twitter" />
            <Image src="/contact/3.png" width={50} height={50} alt="youtube" />
            <Image src="/contact/4.png" width={50} height={50} alt="icon" />
            <Image src="/contact/5.png" width={50} height={50} alt="icon" />
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
            {/* eslint-disable-next-line react/no-unescaped-entities */}{' '}
            characters, location, and story framework. Let's gather these four
            fragments and glimpse the little life of the warriors before
            fighting against alien invasion
          </p>
          <p>
            Note: Each fragment is a DOB, and the 4 matching fragments will be
            destroyed and converted into Chronicle DOB, which has whitelist
            permissions for the game
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
