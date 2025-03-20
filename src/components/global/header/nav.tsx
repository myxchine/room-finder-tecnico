"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rooms", href: "/rooms" },
];

export default function Nav({
  className,
  dark,
}: {
  className: string;
  dark?: boolean;
}) {
  const pathname = usePathname();

  if (dark) {
    return (
      <nav className={className}>
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            scroll={false}
            className={` rounded-lg  text-base md:text-sm hover:text-background  w-fit items-center text-center ${
              pathname === item.href ? "text-background" : "text-background/50"
            }
            
            `}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    );
  }
  return (
    <nav className={className}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          scroll={false}
          className={` rounded-lg  text-base md:text-sm hover:text-black  w-fit items-center text-center ${
            pathname === item.href ? "text-black" : "text-black/50"
          }
          
          `}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
