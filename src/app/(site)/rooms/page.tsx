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
          <h1>Room Finder</h1>
          <p>
            Made with Tecnico Students in mind, all rooms are in Saldanha,
            Lisbon, close to the University.
          </p>
        </Component>

        <PropertyList properties={properties} />
      </Row>
    </Section>
  );
}
