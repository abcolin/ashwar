import Image from 'next/image'

export default function AshwarLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <Image src="/logo.png" width={197} height={62} alt="logo" />
      <Image
        src="/sublogo.png"
        width={102}
        height={35}
        alt="sublogo"
      />
    </div>
  )
}
