export default function UserPanel() {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-4 border border-orange-300">
        <a
          href="#"
          className="flex space-x-1 items-center px-6 py-2"
          aria-current="page"
        >
          <span>Overview</span>
        </a>
        <a
          href="#"
          className="flex space-x-1 items-center px-6 py-2"
        >
          <span>Chronicle NFT</span>
        </a>
        <a
          href="#"
          className="flex space-x-1 items-center px-6 py-2"
        >
          <span>ChronicleDOB</span>
        </a>
        <a
          href="#"
          className="flex space-x-1 items-center px-6 py-2"
        >
          <span>History</span>
        </a>
      </div>
    </div>
  )
}
