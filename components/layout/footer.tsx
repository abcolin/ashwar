import AshwarLogo from './ashwar-logo'
import { Button } from '@/components/ui/button'
import { TwitterLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
  return (
    <div className="grid grid-cols-3 gap-x-48 px-60 py-16 bg-zinc-950 text-white">
      <div>
        <AshwarLogo />
        <div className="w-72 text-center mt-6">
          ASH WAR is a Fully On-Chain Game for all cypto users.
        </div>
      </div>
      <div className="pl-12">
        <p className="text-2xl mb-4">Find out more</p>
        <ul className="text-base">
          <li className="mb-2">
            <a href="">Whitepaper</a>
          </li>
          <li className="mb-2">
            <a href="">Pitch Deck</a>
          </li>
          <li>
            <a href="">FAQS</a>
          </li>
        </ul>
      </div>
      <div className="text-2xl mb-4">
        <p className="mb-2">JOIN OUR COMMUNITY</p>
        <div className="mb-4 flex gap-x-2 py-2">
          <TwitterLogoIcon className="h-8 w-8" />
          <TwitterLogoIcon className="h-8 w-8" />
          <TwitterLogoIcon className="h-8 w-8" />
          <TwitterLogoIcon className="h-8 w-8" />
        </div>
        <Button variant="secondary">Send us your suggestions</Button>
      </div>
    </div>
  )
}
