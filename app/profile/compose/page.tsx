import FragmentPanel from '@/components/profile/compose/fragment-panel'
import ComposePanel from '@/components/profile/compose/compose-panel'
import MintPanel from '@/components/profile/compose/mint-panel'

export default function Page() {
  return (
    <main className="flex flex-col md:flex-row md:overflow-hidden mb-6">
      <div className="flex-none md:w-[560px] text-white text-lg">
        <FragmentPanel />
      </div>
      <div className="flex-grow md:overflow-y-auto">
        <ComposePanel />
      </div>
      <div className="flex-none md:w-[380px]">
        <MintPanel />
      </div>
    </main>
  )
}
