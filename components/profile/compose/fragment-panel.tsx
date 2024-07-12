import MenuBar from "./menu-bar"
import ListContent from "./list-content"

export default function FragmentList() {
  return (
    <div className="pt-3 pb-4 px-6">
      <h3 className="text-2xl text-orange-300 py-6 pl-24">fragment</h3>
      <MenuBar />
      <ListContent />
    </div>
  )
}