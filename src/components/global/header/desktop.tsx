import Link from "next/link";
import { SearchIcon } from "../icons";
import Nav from "./nav";
import Logo from "@/components/global/logo";

export default function Menu() {
  return (
    <div className=" md:flex hidden flex-row items-center justify-between  w-full    gap-8 bg-transparent">
      <Nav
        className="flex flex-row gap-8  justify-start items-center w-2/5"
        dark
      />
      <div className="flex w-1/5 justify-start items-center">
        <Logo />
      </div>
      <div className="flex flex-col justify-end items-end w-2/5 ">
        <Link href="/workout-generator/workouts" className="w-fit">
          <SearchIcon className="size-5 cursor-pointer " />
        </Link>
      </div>
    </div>
  );
}
