import Image from "next/image"
import { CopyIcon } from '@radix-ui/react-icons'


export default function UserPanel() {
  return (
    <div className="pt-32 pb-28 bg-slate-900 text-white">
      <Image
        width={20}
        height={20}
        className="h-36 w-36 rounded-full mx-auto mb-8"
        src="/user.jpeg"
        alt="user"
      />
      <div className="flex gap-x-4 justify-center mb-16">
        <Image
          src="/small-logo.png"
          width={28}
          height={28}
          alt="icon"
          className=""
        />
        <span className="px-2">
          ckb1qrgqep8s
        </span>
        <CopyIcon className="size-6 cursor-pointer" />
      </div>
      <div className="text-center">
        <span className="text-orange-300 text-5xl leading-10">1200</span>
        <p>Your Reward Points</p>
      </div>
    </div>
  )
}
