export default function Page() {
  return (
    <main className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-[300px] p-12 text-white text-lg">
        <p className="mb-4">
          Chornicle VIP DOB gives the eligibility for owners to participate in
          our next rogue-like fully on-chain game, which will be the ever first
          game in Bitcoin ecosystem that offers PVE, PVP and UGC mode.
        </p>
        <p>VIPs have rights:</p>
        <ul className="list-decimal list-inside">
          <li>gain airdropped tokens</li>
          <li>give discount in playing game</li>
          <li>many other rights</li>
        </ul>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">222</div>
    </main>
  )
}
