/* eslint-disable react/no-unescaped-entities */

const events = [
  {
    date: '2024.06',
    title: 'Mint ASH WAR Chronicle NFT fragments',
    desc: 'Find more detailed insctructions here.',
  },
  {
    date: '2024.07',
    title: 'Compose ASH WAR Chronicle DOB',
    desc: 'Find more detailed insctructions here.',
  },
  {
    date: '2024.12',
    title: 'ASH WAR Game PVE release test',
    desc: 'Find more detailed insctructions here.',
  },
  {
    date: '2025.03',
    title: 'ASH WAR Game PVE mainnet released',
    desc: 'Find more detailed insctructions here.',
  },
  {
    date: '2025.04',
    title: 'ASH WAR Game PVP release test',
    desc: 'Find more detailed insctructions here.',
  },
  {
    date: '2025.06',
    title: 'ASH WAR Game PVP mainnet released',
    desc: 'Find more detailed insctructions here.',
  },
  {
    date: '2025.08',
    title: 'ASH WAR Game UGC release test',
    desc: 'Find more detailed insctructions here.',
  },
]

export default function TimelineSections() {
  return (
    <div className="w-full bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {events.map((event) => (
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" key={event.date}>
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-orange-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-1.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">{event.title}</div>
                  <time className="font-caveat font-medium text-indigo-500">
                    {event.date}
                  </time>
                </div>
                <div className="text-slate-500">
                  {event.desc}
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </div>
  )
}
