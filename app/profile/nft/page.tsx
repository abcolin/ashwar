export default function Page() {
  return (
    <main className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-[300px] p-12 text-white text-lg *:mb-4">
        <p>
          Chronicle Fragments have 4 classifications contain Character, Place,
          Time and Event.
        </p>
        <p>Character is the player you are playing with in the game. </p>
        <p>Place is where your story happened. </p>
        <p>Time describes when your player acting at the place. </p>
        <p>Event contains your unique story in the game.</p>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">222</div>
    </main>
  )
}
