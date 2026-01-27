import { members, execMembers } from "@/app/lib/member-data";

import MemberCard from "@/app/ui/MemberCard";

export default async function Page() {
  return (
    <div className="grid grid-rows-2">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {execMembers
          .filter((member) => member.isActive)
          .map((member) => {
            return (
              <div key={member.name} className="col-span-2 mx-10">
                <MemberCard member={member} />{" "}
              </div>
            );
          })}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {members
          .filter((member) => member.isActive && !member.isExec)
          .map((member) => {
            return (
              <div key={member.name} className="col-span-2 mx-10">
                <MemberCard member={member} />{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
}
