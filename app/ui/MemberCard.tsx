import { Member } from "@/app/lib/definitions";
import Link from "next/link";
import Image from "next/image";
import { nameToPath } from "@/app/lib/utils";

export default async function AboutMember({ member }: { member: Member }) {
  return (
    <>
      <Link
        href={`/member/${nameToPath(member.name)}`}
        className="group relative block w-full h-full min-w-64 min-h-64"
      >
        <Image
          alt=""
          src={member.photo ? member.photo : "/logo.png"}
          className="absolute inset-0 object-cover opacity-90 transition-opacity group-hover:opacity-50 rounded-2xl"
          fill={true}
        />

        <div className="relative text-gray-200 p-4">
          <p className="text-sm font-medium tracking-widest uppercase">
            {member.roles ? member.roles[0] : "role"}
          </p>

          <p className="text-xl font-bold sm:text-2xl">{member.name}</p>

          <div className="mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm">{""}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
