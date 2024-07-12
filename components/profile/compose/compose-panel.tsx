export default function ComposePanel() {
  return (
    <div className="px-4">
      <div className="bg-[#cccccc]/20 rounded-lg text-2xl text-center text-white leading-[320px]">
        <div className="p-6 grid grid-cols-2 gap-x-4 gap-y-4">
          <div className="rounded bg-[#cccccc]/50 h-80">Event</div>
          <div className="rounded bg-[#cccccc]/50 h-80">Character</div>
          <div className="rounded bg-[#cccccc]/50 h-80">Place</div>
          <div className="rounded bg-[#cccccc]/50 h-80">Time</div>
        </div>
      </div>
    </div>
  )
}
