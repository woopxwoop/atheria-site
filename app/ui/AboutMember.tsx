import { Member } from "@/app/lib/definitions";

export default async function AboutMember({ member }: { member: Member }) {
  return <>{member.name}</>;
}
