import PropertyCard from "./card";

export default function PropertyList({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {properties.map((property, index) => (
        <PropertyCard property={property} key={index} />
      ))}
    </div>
  );
}
