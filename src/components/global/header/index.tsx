import Mobile from "./mobile";
import Desktop from "./desktop";
export const dynamic = "force-dynamic";

export default function Header() {
  return (
    <header className="flex flex-col w-full sticky top-0 z-[1000000]   p-3 px-3 md:p-6 md:pt-6 top-gradient">
      <div className=" w-full pl-5 pr-5 py-3 md:px-5 md:py-3 max-w-4xl mx-auto rounded-full bg-black z-50 text-background">
        <Mobile />
        <Desktop />
      </div>
      <div className=" absolute bottom-0 left-0 w-full headergradient h-full" />
    </header>
  );
}
