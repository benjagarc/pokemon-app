export const SkeletonCard = () => {
  return (
    <div className="w-full bg-pokemon-glass glass border border-gray-200 rounded-xl p-4 shadow-md text-center relative animate-pulse space-y-3">
      <div className="w-32 h-32 mx-auto bg-black/40 rounded-lg" />
      <div className="h-4 w-3/5 mx-auto bg-black/50 rounded" />
      <div className="h-3 w-2/4 mx-auto bg-black/40 rounded" />
      <div className="h-3 w-4/5 mx-auto bg-black/30 rounded" />
      <div className="mt-4 h-8 w-24 mx-auto bg-black/40 rounded" />
    </div>
  );
};

export default SkeletonCard;
