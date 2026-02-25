import { members, execMembers } from "@/app/lib/member-data";

import MemberCard from "@/app/lib/ui/MemberCard";

export default async function Page() {
  return (
    <main className="flex flex-col items-center w-[80%] gap-y-4">
      <h1> About us</h1>
      <p>
        We are Atheria, a people-centered medical technology company built by
        ambitious college undergraduates driven to improve lives through
        innovation. Bringing together diverse perspectives across healthcare,
        engineering, and data science, we create human-centered technologies
        that address real-world health challenges. Guided by purpose and
        curiosity, we believe technology can be a powerful force for a
        healthier, better future.
      </p>
      <h1 className="w-full text-center mt-10"> Meet the team</h1>
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {execMembers
            .filter((member) => member.isActive)
            .map((member) => {
              return (
                <div key={member.name} className="col-span-2">
                  <MemberCard member={member} />
                </div>
              );
            })}

          {members
            .filter((member) => member.isActive && !member.isExec)
            .map((member) => {
              return (
                <div key={member.name} className="col-span-2 ">
                  <MemberCard member={member} />
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
