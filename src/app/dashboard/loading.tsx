import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="h-screen w-screen items-center flex justify-center">
        {" "}
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            className="animate-pulse invert mb-6"
            src="/veta-template.jpg"
            alt="veta"
            width={50}
            height={50}
          />
          <Skeleton className=" w-[500px] h-[20px]" />
          <Skeleton className="w-[500px] h-[15px]" />
          <Skeleton className="w-[500px] h-[20px]" />
          <Skeleton className="w-[500px] h-[15px]" />
        </div>
      </div>
    </>
  );
}