import Image from 'next/image'

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl: '/user.jpeg',
  },
  {
    name: 'Leslie Alexander1',
    role: 'Co-Founder / CEO',
    imageUrl: '/user.jpeg',
  },
  {
    name: 'Leslie Alexander2',
    role: 'Co-Founder / CEO',
    imageUrl: '/user.jpeg',
  },
  {
    name: 'Leslie Alexander3',
    role: 'Co-Founder / CEO',
    imageUrl: '/user.jpeg',
  },
  {
    name: 'Leslie Alexander4',
    role: 'Co-Founder / CEO',
    imageUrl: '/user.jpeg',
  },
  {
    name: 'Leslie Alexander5',
    role: 'Co-Founder / CEO',
    imageUrl: '/user.jpeg',
  },
]

export default function TeamSections() {
  return (
    <div className="bg-zinc-800 text-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg leading-8">
            We are a professional team of encryption developers dedicated to
            cutting-edge encryption asset technology solutions. Our team members
            come from different technical fields and have rich experience and
            professional knowledge.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  width={40}
                  height={40}
                  className="h-20 w-20 rounded-full"
                  src={person.imageUrl}
                  alt="user"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
