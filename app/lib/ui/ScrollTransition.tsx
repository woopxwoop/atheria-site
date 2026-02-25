// "use client";
// import { useIsVisible } from "../lib/utils";
// import { useRef } from "react";

// export default function ScrollTransition({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const ref = useRef<HTMLDivElement>(null);
//   const isVisible = useIsVisible(ref);

//   return (
//     <>
//       <div
//         ref={ref}
//         className={`transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
//       >
//         {children}
//       </div>
//     </>
//   );
// }
