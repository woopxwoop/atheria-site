export function nameToPath(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

// export function useIsVisible(
//   ref: React.RefObject<HTMLDivElement | null>,
// ): boolean {
//   const [isIntersecting, setIntersecting] = useState<boolean>(false);

//   useEffect(() => {
//     if (!ref.current) return;

//     const observer = new IntersectionObserver(([entry]) => {
//       setIntersecting(entry.isIntersecting);
//     });

//     observer.observe(ref.current);
//     return () => {
//       observer.disconnect();
//     };
//   }, [ref]);

//   return isIntersecting;
// }
