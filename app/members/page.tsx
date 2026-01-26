import members from "@/app/lib/member-data";
import MemberCard from "@/app/ui/MemberCard";

export default async function Page() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {members.map((member) => {
        return (
          <div key={member.name} className="col-span-2 mx-10">
            <MemberCard member={member} />{" "}
          </div>
        );
      })}
    </div>
  );
}
