import { defaultUser } from "@/assets/home/home";
import { Opinion } from "@/types/opinions";
import Image from "next/image";

export default function OpinionRef({ content, user }: Opinion) {
  const { fullName, position } = user;
  return (
    <div className="bg-opinion border-[#33295B] rounded-xl border-[1px] p-6 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="rounded-full relative h-12 w-12 overflow-hidden">
          <Image
            width={48}
            height={48}
            className="absolute inset-0 w-full h-full"
            src={defaultUser}
            title={`${fullName}'s opinion`}
            alt={`${fullName}'s opinion`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-[#5B4F6C] text-[.8rem] font-semibold">
            {position}
          </h5>
          <h4 className="font-semibold text-sm text-[#C4BAD3]">{fullName}</h4>
        </div>
      </div>
      <p className="text-[#C4BAD3] text-sm leading-relaxed font-medium">
        {content}
      </p>
    </div>
  );
}
