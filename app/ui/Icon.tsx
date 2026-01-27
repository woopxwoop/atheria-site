import * as Icons from "@/app/ui/Icons";
import { ReactNode } from "react";

function getIcon(name: string): ReactNode | boolean {
  switch (name.toLowerCase()) {
    case "linkedin":
      return <Icons.Linkedin />;
    case "github":
      return <Icons.Github />;
    default:
      return false;
  }
}

export default async function Icon(props: { name: string }) {
  const result: ReactNode | boolean = getIcon(props.name);
  return result ? (
    <span className="h-full aspect-square inline-block">{result}</span>
  ) : (
    <></>
  );
}
