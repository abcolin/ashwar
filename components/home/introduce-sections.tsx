/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export default function IntroduceSections() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 text-white">
      <Image
        src="/introduce-bg.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="mx-auto max-w-7xl pb-6 lg:px-8">
        <div className="flex flex-col gap-y-3">
          <p>
            ASH WAR is a full chain Roguelike blockchain game using Spore DOB
            protocol, based on Nervos.
          </p>
          <p>
            Before we released the ash wars, we released the Chronicle version
            in advance, which was used to record and describe the story segments
            of our spore warriors from their quiet life to their invasion by
            alien enemies. We divide the story into four parts: "CHARACTER",
            "PLACE", "TIME" and "EVENTS". Except for the "event" section, all
            other sections are text representations similar to the "loot
            Adventure" style, such as:
          </p>
          <div className="mx-auto max-w-2xl border border-orange-300 px-8 py-4 my-4">
            <div>
              #Top hero Name:<br />
              Immortal Dodo Assassin<br />
              HP: <span className='text-red-600'>102</span><br />
              Energy: <span className='text-red-600'>3</span><br />
              Attack: <span className='text-red-600'>1</span><br />
              Defense: <span className='text-red-600'>10</span><br />
              Money: <span className='text-red-600'>50</span><br />
              Hand: -Fatal Strike [<span className='text-red-600'>2</span>]<br />
              Causing <span className='text-red-600'>5</span> damage and restoring <span className='text-red-600'>5</span> health points<br />
              -Meditation [<span className='text-red-600'>1</span>]<br />
              Draw <span className='text-red-600'>1</span> card and restore <span className='text-red-600'>2</span> health points
            </div>
          </div>
          <p>
            Player Mint randomly obtains fragments and random content of
            "CHARACTER", "PLACE", "TIME" and "EVENT". When all synchronous NFTs
            of "CHARACTER", "PLACE" and "TIME" can be loaded into "EVENT", they
            will be integrated into a plot synchronous DOB, sent to BTC main
            network through RGB+protocol, and share 10% of the game capital
            pool.
          </p>
          <p>
            We will have a special website to help users show the story of
            Chronicle DOB. When players hold the story of chronicle DOB, they
            can first experience the PVE battle of the game, that is to say,
            they can get the share of token airdrops in advance.
          </p>
          <p>##Rules of the game</p>
          <p>
            1. After the player Mint chronicle NFT, he randomly gets a plot NFT,
            including "CHARACTER", "PLACE", "TIME" and "EVENT".
          </p>
          <p>2. The plot NFT can be traded.</p>
          <p>
            3. Four types of fragments that meet the requirements can be
            synthesized into a complete chronicle DOB, while sharing 10% of the
            capital share of the game capital pool.
          </p>
          <p>
            4. In the whole network state, the subsequent Mint price will also
            increase when a "chronicle DOB" is synthesized, otherwise it will
            decrease to the starting price at most.
          </p>
          <p>5. All NFTs are tradable and subject to processing fees</p>
          <p>
            6. Chronicle DOB will exist as a white list, and players with
            chronicle DOB can participate in game testing in advance.
          </p>
        </div>
      </div>
    </div>
  )
}
