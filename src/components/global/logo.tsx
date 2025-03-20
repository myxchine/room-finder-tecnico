import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-inter-sans font-base tracking-tightest text-base md:text-lg flex flex-col items-center justify-center gap-0 w-fit"
    >
      <span className="w-fit">[Tecnico Rooms]</span>
    </Link>
  );
}
