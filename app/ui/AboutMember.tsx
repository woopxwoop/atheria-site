import { Member } from "@/app/lib/definitions";
import Image from "next/image";
import Icon from "@/app/ui/Icon";

export default async function AboutMember({ member }: { member: Member }) {
  return (
    <div className="w-[70%] grid grid-cols-3 gap-5 ">
      <div className="w-[90%] flex flex-col col-span-2 items-start">
        <div className="w-full flex flex-row justify-start items-baseline">
          <h1 className="inline-block">{member.name}</h1>
          <h2 className="inline-block italic ml-4 tertiary-color">
            {member.roles.join(", ")}
          </h2>
        </div>
        <h2 className="secondary-color">{member.fieldsOfStudy.join(", ")}</h2>
        <p className="mt-10"> {member.statement} </p>

        <div className="w-full h-6 sm:h-8 flex flex-row justify-start mt-10 gap-2">
          {member.links.map((link) => {
            return (
              <a
                href={link.url}
                key={link.type}
                aria-label={`link to ${member.name}'s ${link.type}`}
                className="hover:opacity-50"
                target="_blank"
              >
                <Icon name={link.type} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="text-center w-full flex-col justify-start items-center">
        <Image
          alt={`photo of ${member.name}`}
          src={member.photo ? member.photo : "/logo.png"}
          className="inset-0 object-cover opacity-90 transition-opacity group-hover:opacity-50 rounded-2xl"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
}
