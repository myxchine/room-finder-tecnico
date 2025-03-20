import Image from "next/image";
import { Section, Row, Component } from "@/components/global/ui";
import Link from "next/link";
import PropertyList from "@/components/properties/list";
import { properties } from "@/data";
export default function Home() {
  return (
    <Section>
      <Row>
        <Component centered padding small>
          <h1>Student at Tecnico who needs accomodation?</h1>
          <p className="max-w-md mx-auto">
            Find the <strong>best hand-picked accomodation</strong> here for the{" "}
            <strong>lowest prices</strong>, all for free.
          </p>

          <Link href="/rooms" className="button-black">
            View All Rooms {"->"}
          </Link>
        </Component>

        <Component>
          <h2>Latest Rooms</h2>
          <p>Take a look at what we recently found for you.</p>
        </Component>
        <PropertyList properties={properties} />
      </Row>
    </Section>
  );
}
