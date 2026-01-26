import members from "@/app/lib/member-data";
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

  const isValidMember: boolean = typeof member !== undefined;

  return isValidMember ? <AboutMember member={member as Member} /> : <></>;
}
