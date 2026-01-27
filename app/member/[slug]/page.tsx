import { members } from "@/app/lib/member-data";
import { Member } from "@/app/lib/definitions";
import { nameToPath } from "@/app/lib/utils";
import AboutMember from "@/app/ui/AboutMember";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member: Member | undefined = members.find((m) => {
    return nameToPath(m.name) === slug;
  });

  console.log(member);

  const isValidMember: boolean = typeof member !== "undefined";

  return (
    <main className="w-full flex flex-col justify-center items-center">
      {isValidMember ? (
        <AboutMember member={member as Member} />
      ) : (
        <> This person is not a member of Atheria</>
      )}
    </main>
  );
}
