type Props = {};

export default function CardSkeleton({}: Props) {
  return (
    <div className="flex flex-col shadow-md rounded-xl w-full overflow-hidden">
      <div className="relative w-full aspect-video bg-gray-300 animate-pulse"></div>
      <div className="px-3 py-5">
        <div className="w-40 h-3 bg-gray-300 animate-pulse rounded-lg"></div>
        <div className="w-full h-3 mt-2 bg-gray-300 animate-pulse rounded-lg"></div>
        <div className="w-full h-3 mt-2 bg-gray-300 animate-pulse rounded-lg"></div>
        <div className="w-full h-3 mt-2 bg-gray-300 animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
}
