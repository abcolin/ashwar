export default function ListContent() {
  return (
    <div className="p-3 mt-2 bg-[#cccccc]/30 rounded-lg min-h-80">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between bg-zinc-950 rounded-2xl px-4 py-3">
          <div className="flex-1">荒原的 ｜ 阿斯皮纳 ｜ 战士</div>
          <div className="flex-none w-24 rounded bg-gradient-to-r to-transparent from-orange-500/80"></div>
        </div>
        <div className="flex justify-between bg-zinc-950 rounded-2xl px-4 py-3">
          <div className="flex-1">烈焰的 ｜ 韦格 ｜ 猎手</div>
          <div className="flex-none w-24 rounded bg-gradient-to-r to-transparent from-purple-500/80"></div>
        </div>
        <div className="flex justify-between bg-zinc-950 rounded-2xl px-4 py-3">
          <div className="flex-1">奇迹的 ｜ 耶格尔 ｜ 牧师</div>
          <div className="flex-none w-24 rounded bg-gradient-to-r to-transparent from-blue-500/80"></div>
        </div>
      </div>
    </div>
  )
}
