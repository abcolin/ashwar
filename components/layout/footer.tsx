import AshwarLogo from './ashwar-logo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="grid grid-cols-3 gap-x-48 px-60 py-16 bg-zinc-950 text-white">
      <div>
        <AshwarLogo />
        <div className="w-72 text-center mt-8">
          ASH WAR is a Fully On-Chain Game for all cypto users.
        </div>
      </div>
      <div className="pl-12">
        <p className="text-2xl mb-6">Find out more</p>
        <ul className="text-base">
          <li className="mb-4">
            <a href="">Whitepaper</a>
          </li>
          <li className="mb-4">
            <a href="">Pitch Deck</a>
          </li>
          <li>
            <a href="">FAQS</a>
          </li>
        </ul>
      </div>
      <div className="text-2xl mb-4">
        <p className="mb-4">JOIN OUR COMMUNITY</p>
        <div className="mb-6 flex gap-x-4 py-2">
          <Image src="/contact/1.png" width={50} height={50} alt='facebook' />
          <Image src="/contact/2.png" width={50} height={50} alt='twitter' />
          <Image src="/contact/3.png" width={50} height={50} alt='youtube' />
          <Image src="/contact/4.png" width={50} height={50} alt='icon' />
          <Image src="/contact/5.png" width={50} height={50} alt='icon' />
        </div>
        <Button variant="secondary">Send us your suggestions</Button>
      </div>
    </div>
  )
}
