const CardSkeleton = () => {
    return (
      <div className="flex animate-pulse flex-col gap-2 rounded-lg border border-neutral-200 bg-[#fafbff] p-6 text-center">
        <div className="mx-auto h-6 w-3/4 rounded bg-neutral-200"></div>
  
        <div className="mx-auto h-4 w-1/2 rounded bg-neutral-200"></div>
  
        <div className="mx-auto h-4 w-2/3 rounded bg-neutral-200"></div>
  
        <div className="mx-auto h-4 w-3/4 rounded bg-neutral-200"></div>
  
        <div className="mx-auto h-4 w-1/2 rounded bg-neutral-200"></div>
  
        <div className="mt-2 h-8 w-full rounded-full bg-neutral-200"></div>
  
        <div className="mt-2 h-8 w-full rounded-full bg-neutral-200"></div>
  
        <div className="mt-4 flex justify-center gap-1">
          <div className="h-5 w-8 rounded bg-neutral-200"></div>
          <div className="h-5 w-16 rounded bg-neutral-200"></div>
        </div>
  
        <div className="mx-auto h-5 w-24 rounded bg-neutral-200"></div>
  
        <div className="mt-2 h-10 w-full rounded-full bg-neutral-200"></div>
      </div>
    );
  };
  
  export default CardSkeleton;
  