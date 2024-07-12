export default function MenuBar() {
  return (
    <div className="flex space-x-4 text-orange-300 text-xl px-2">
      <a className="flex space-x-1 items-center px-6 py-2 border rounded-2xl border-orange-200">
        <span>Character</span>
      </a>
      <a className="flex space-x-1 items-center px-6 py-2">
        <span>Place</span>
      </a>
      <a className="flex space-x-1 items-center px-6 py-2">
        <span>Time</span>
      </a>
      <a className="flex space-x-1 items-center px-6 py-2">
        <span>Event</span>
      </a>
    </div>
  )
}
