export default function MoveSkeleton () {
  return (

<div className="flex mx-auto bg-white shadow-lg select-none p-4 rounded-2xl flex-row snap-start gap-[1rem] shrink-0 min-w-minMobile w-[400px] h-[20rem]">
    <div className="bg-gray-200 h-full w-[15rem] rounded-xl animate-pulse">
    </div>
    <div className="flex flex-col flex-1 gap-5 p-2">
        <div className="flex flex-col flex-1 gap-3">
            <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl">
            </div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
            </div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
            </div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
            </div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
            </div>
        </div>

    </div>
</div>
  )
}
