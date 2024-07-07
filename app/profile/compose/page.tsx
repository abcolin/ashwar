export default function Page() {
  return (
    <main className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 pl-6">
        111
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        222
      </div>
    </main>
  )
}